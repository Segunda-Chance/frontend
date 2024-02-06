import { useEffect } from "react"
import Categoria from "../../../models/Categoria"
import Loader from "../../loader/Loader"
import CardCategoria from "../cardcategoria/CardCategoria"


interface ListaCategoriasProps {
    getCategorias: () => void
    categorias: Categoria[]
}

function ListaCategorias({ categorias, getCategorias }: ListaCategoriasProps) {

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
        {categorias.length === 0 && (
            <Loader />
        )}
            <div className="flex justify-center w-full my-1">
                <div className=" flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias