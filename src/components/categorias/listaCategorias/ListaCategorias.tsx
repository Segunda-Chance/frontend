import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { AuthContext } from "../../../contexts/AuthContext"
import { DNA } from "react-loader-spinner"
import CardCategoria from "../cardcategoria/CardCategoria"

function ListaCategorias(){
    const navigate = useNavigate()

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [categorias.length])



    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

function buscar(arg0: string, setCategorias: Dispatch<SetStateAction<Categoria[]>>, arg2: { headers: { Authorization: string } }) {
    throw new Error("Function not implemented.")
}