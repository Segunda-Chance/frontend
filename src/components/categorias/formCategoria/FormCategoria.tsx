import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface FormularioCategoriaProps {
    setCategorias?: (value: Categoria[]) => void
    categorias?: Categoria[]
}

function FormCategoria({ categorias, setCategorias }: FormularioCategoriaProps) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    const { usuario } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada!', 'erro')
            retornar();
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                ToastAlerta('Categoria atualizada!', 'sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao atualizar a Categoria', 'erro')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })

                ToastAlerta('Categoria cadastrada!', 'sucesso')

                // verifica se as props foram passadas
                if (setCategorias != undefined && categorias != undefined) {
                    setCategorias([...categorias, categoria])
                }

                // Reinicia o estado categoria
                setCategoria({
                    id: 0,
                    nomeCategoria: '',
                    tipo: ''
                })

            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar a Categoria', 'erro')
            }
        }

        setIsLoading(false)
        retornar();
    }

    // Alterar rota de retorno
    function retornar() {
        navigate("/categorias")
    }


    return (
        <>
            <div className=" flex flex-col items-center justify-center mx-auto">
                <h1 className="tituloCategoria text-4xl text-center my-8 ">
                    {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                </h1>
                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                    <input id="input-1" autoFocus type="text" name='tipo' placeholder="Calçado" required value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    <label htmlFor="input-1">
                        <span className="label-text">Tipo Categoria</span>
                        <span className=""></span>
                        <div className="signup-button-trigger">Cadastrar Categoria</div>
                    </label>
                    <input id="input-2" type="text" name='nomeCategoria' placeholder="Tênis" required value={categoria.nomeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    <label htmlFor="input-2">
                        <span className="label-text">Nome Categoria</span>
                        <span className=""></span>
                    </label>
                    <button id="buttonCategoria" className='w-1/2 py-2 flex justify-center' >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Concluir</span>
                        }
                    </button>
                    <p className="tip">Aperte Tab</p>
                    <div className="signup-button" >{id === undefined ? 'Cadastrar' : 'Atualizar'}</div>
                </form>
            </div>
        </>
    );
}

export default FormCategoria;
