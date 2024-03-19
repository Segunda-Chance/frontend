import { useEffect } from "react"
import Categoria from "../../../models/Categoria"
import Loader from "../../loader/Loader"
import CardCategoriaHome from "../cardcategoriahome/CardCategoriaHome"
import "./ListaCategoriasHome.css"


interface ListaCategoriasProps {
    getCategorias: () => void
    categorias: Categoria[]
}

function ListaCategoriasHome({ categorias, getCategorias }: ListaCategoriasProps) {

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
        {categorias.length === 0 && (
            <Loader />
        )}
            <div className=" flex justify-center w-full -mt-36">
                <div className="listCat flex flex-col">
                    <div className="containerCatHome grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
                        {categorias.map((categoria) => (
                            <CardCategoriaHome key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategoriasHome