import { useContext, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Produto from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import CardProdutos from "../cardProdutos/CardProduto"
import './DeletarProduto.css'

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function DeletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produto/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Produto deletado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.response && error.response.data) {
                ToastAlerta(error.response.data.message, 'erro')
            } else {
                ToastAlerta('Erro ao apagar o Produto', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/cadastroProduto")
    }

    return (
        <>
            <div className="flex flex-col w-full gap-0">
            <h1 className="text-center mt-10 mb-5 font-semibold text-2xl">Deseja realmente excluir o produto selecionado ?</h1>
                <div className="m-auto">
                    <CardProdutos key={produto.id} produto={produto} />
                </div>

                <div className="flex m-auto bg-rosa_2 w-56 mb-8 border-solid">
                    
                    <button
                        className='text-slate-100 bg-red-400 
                                hover:bg-red-600 w-1/2 py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    
                    <button
                        className='text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center w-1/2'
                        onClick={DeletarProduto}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true} /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>

            </div>
        
        </>
    )
}

export default DeletarProduto