import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import "./FormProduto.css"
import ListarEditProdutos from "../listarProdutos/ListarEditProdutos";



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
        navigate('/produtos');
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
        <>
        <div className=" flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>
                    <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaPostagem}>
                       
                         {/* Nome do Produto */}
                        <input id="input-1" autoFocus type="text" name='nomeProduto' placeholder="Camiseta Adidas" required value={produto.nomeProduto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} minLength={5} maxLength={100} onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Título deve ter no mínimo 5 e no máximo 100 caracteres!')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                        <label htmlFor="input-1">
                            <span className="label-text">Nome</span>
                            <span className=""></span>
                            <div className="signup-button-trigger">Cadastrar Produto</div>
                        </label>


                        {/* Descrição do Produto */}
                        <input id="input-2" type="text" name="descricao" placeholder="Especificação, Dimensão, Material e Etc " value={produto.descricao}  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} required minLength={10} maxLength={1000} onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Título deve ter no mínimo 10 e no máximo 1000 caracteres!')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />   
                        <label htmlFor="input-1">
                            <span className="label-text">Descrição</span>
                            <span className=""></span>
                            <div className="signup-button-trigger">Cadastrar Produto</div>
                        </label>


                        {/* Foto do Produto */}
                        <input id="input-2" type="text" name="foto" placeholder="URL da foto" value={produto.foto}  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} required minLength={10} maxLength={1000} onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Título deve ter no mínimo 10 e no máximo 1000 caracteres!')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />   
                        <label htmlFor="input-1">
                            <span className="label-text">Foto</span>
                            <span className=""></span>
                            <div className="signup-button-trigger">Cadastrar Produto</div>
                        </label>


                         {/* Preço do Produto */}
                         <input id="input-2" type="number" min="0.00" max="10000.00" step="0.01" name="preco" placeholder="00,00" value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} required />
                        <label htmlFor="input-1">
                            <span className="label-text">Preço</span>
                            <span className=""></span>
                            <div className="signup-button-trigger">Cadastrar Produto</div>
                        </label>
                             
                           
                        {/* Categoria do Produto */}   
                        <select name="categoria" className="flex outline-none" id="input-2" onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option className="opt" value="" selected disabled>Selecione uma Categoria</option>
                            {categorias.map((categoria) => (<><option value={categoria.id}>{categoria.tipo}</option></>))}
                        </select>
                        <label htmlFor="input-2">
                            <span className="label-text">Categoria</span>
                            <span className=""></span>
                        </label>

                        {/* Button de Cadastrar/Atualizar */}
                        <button id="buttonCategoria" className='w-1/2 py-2 flex justify-center' >
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
                        <p className="tip">Aperte Tab</p>
                        <div className="signup-button" >{id === undefined ? 'Concluir' : 'Concluir'}</div>
                    </form>
                </div>

                <div className=" fle mt-36 m-full pb-5 ">
                        <ListarEditProdutos/>      
                </div>
        </>
    );
}

export default FormProduto;