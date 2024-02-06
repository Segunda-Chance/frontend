import ListarProdutos from "../../components/produtos/listarProdutos/ListarProdutos"
import "./Home.css"
import Carrossel from "../../components/carrossel/Carrossel"


function Home() {

    return (
        <>
        <div>
            <Carrossel />
        </div>
            <ListarProdutos />
    </>
    )
}

export default Home 
