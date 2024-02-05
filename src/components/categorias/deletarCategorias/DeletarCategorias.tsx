import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import './DeletarCategorias.css'
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategorias() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria) 
    const [isLoading, setIsLoading] = useState<boolean>(false)
  
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    Authorization: token
                }
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() { 
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    Authorization: token
                }
            })

            ToastAlerta('Apagado com sucesso', "sucesso")

        } catch (error) {
            ToastAlerta('Erro ao apagar a Categoria', "erro")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/cadastrarCategoria")
    }

    return (
        <div className='w-full'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center mb-4 text-2xl'>
                Você tem certeza de que deseja apagar o Categoria?
            </p>
             <div className="cardDelete m-auto">
                {/* Tipo da Categoria */}
                <div className="texto">
                    <h3 className="text-2xl text-center shadowW" >TIPO</h3>
                     <span className="text-xl text-center text-neutro_2 text shadowB">{categoria.tipo}</span>
                </div>

                {/* Nome Categoria */}
                <div className="texto">
                    <h3 className="text-2xl text-center shadowW">CATEGORIA</h3>
                     <span className="text-xl text-center text-neutro_2 shadowB">{categoria.nomeCategoria}</span>
                </div>    

                
                {/* Edit e Delete */}
                <div className="icons">
                {/*  No */}
                    <button className="btn" onClick={retornar}>
                        Não
                    </button>

                    {/* Yes */}

                    
                    <button className="btn" onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategorias
