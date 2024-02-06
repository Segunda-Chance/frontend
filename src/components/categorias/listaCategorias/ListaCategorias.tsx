import {useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { AuthContext } from "../../../contexts/AuthContext"
import CardCategoria from "../cardcategoria/CardCategoria"
import { buscar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import Loader from "../../loader/Loader"

function ListaCategorias(){
    const navigate = useNavigate()

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
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
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
        {categorias.length === 0 && (
            <Loader />
        )}
            <div className="flex justify-center w-full my-1">
                <div className=" flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias

