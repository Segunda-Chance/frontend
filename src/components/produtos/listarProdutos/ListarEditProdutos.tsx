import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardEditProduto from "../cardProdutos/CardEditProduto";
import Loader from "../../loader/Loader";


function ListarEditProdutos() {

    const navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar('/produto', setProdutos, {
                headers: {
                    Authorization: token,
                },
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
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            {produtos.length === 0 && (
                <Loader />
            )}
            
                <div className=" flex m-auto w-4/5">
                    <div className=' m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {produtos.map((produto) => (
                            <CardEditProduto key={produto.id} produto={produto}/>
                        ))}
                    </div>
                </div>
        </>
    );
}

export default ListarEditProdutos;