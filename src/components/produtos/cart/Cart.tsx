import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";

function Cart() {
    const navigate = useNavigate();
    const { items, limparCart } = useContext(CartContext);

    const finalizarCompra = () => {
        // Lógica de finalização de compra aqui
        limparCart(); // Exemplo: limpando o carrinho ao finalizar a compra
        navigate('/'); 
    };

    return (
        <div className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                ">

            <h1 className="text-4xl text-center my-4">
                Carrinho de Compras
            </h1>
            <h2 className="text-2xl text-center my-4">
                {items.length === 0 ? 'O Carrinho está vazio!' : null}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {items.map(produto => (
                    <CardCart key={produto.id} item={produto} />
                ))}
            </div>

            <button
                className="rounded text-slate-100 bg-slate-400 
                hover:bg-slate-800 w-1/4 py-2 mx-auto flex justify-center"
                type="button"
                disabled={items.length === 0}
                onClick={finalizarCompra}>
                Finalizar Compra
            </button>
        </div>
    );
}

export default Cart;
