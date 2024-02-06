import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        tipo: '',
    })

    const carregandoCategorias = categoria.tipo === '';

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produto/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info");
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/produto');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Produto atualizado com sucesso', "sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar o Produto', "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Produto cadastrado com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar o Produto', 'erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título do Produto</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="nomeProduto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nomeProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={5}
                        maxLength={100}
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Título deve ter no mínimo 5 e no máximo 100 caracteres!')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="texto">Texto do Produto</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={10}
                        maxLength={1000}
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Título deve ter no mínimo 10 e no máximo 1000 caracteres!')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="texto">Preço</label>
                    <input
                        type="number"
                        min="0.00"
                        max="10000.00"
                        step="0.01"
                        placeholder="Texto"
                        name="preco"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.tipo}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    disabled={carregandoCategorias}
                    className='rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 
                            mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormProduto;