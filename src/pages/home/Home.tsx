import ListarProdutos from "../../components/produtos/listarProdutos/ListarProdutos"
import "./Home.css"
import Carrossel from "../../components/carrossel/Carrossel"


function Home() {

    return (
        <>
        <div>
            <Carrossel />
        </div>

            <div>
                <br/>
                <h1 className="mb-4 text-gray-900 text-6xl text-center mt-5">Produtos</h1>
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home 
