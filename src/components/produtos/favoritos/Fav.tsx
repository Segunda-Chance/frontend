import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../../../contexts/FavContext";
import CardFav from "../cardfav/CardFav";


function Fav() {

    const navigate = useNavigate();

    const { items, limparFav } = useContext(FavContext)

    return (
        <div className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                ">

            <h1 className="orgStats flex justify-center py-08 text-5xl font-extrabold bg mt-20">
                Favoritos
            </h1>
            <h2 className="text-2xl text-center my-4">
                {items.length === 0 ? 'Nenhum Favorito!' : ''}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    items.map(produto => (
                        <CardFav key={produto.id} item={produto} />
                    ))
                }
            </div>

            <button className="rounded text-slate-100 bg-slate-400 w-1/4 py-2 mx-auto flex justify-center cursor-pointer bg-neutro_1 text-white_1 hover:bg-laranja_2 transition duration-300 ease-in-out"
                type="submit"
                disabled={items.length === 0 ? true : false}
                onClick={limparFav}>
                Remover Todos
            </button>
        </div>
    )
}

export default Fav