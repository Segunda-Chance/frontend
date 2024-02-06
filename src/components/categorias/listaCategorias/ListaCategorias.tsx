import { useEffect } from "react"
import { DNA } from "react-loader-spinner"
import Categoria from "../../../models/Categoria"
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
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
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