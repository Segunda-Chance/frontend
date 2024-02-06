import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardProduto from "../cardProdutos/CardProduto";
import Animacao from "../../loader/Loader";


function ListarProdutos() {

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
                ToastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
        
            {produtos.length === 0 && (

                <Animacao/>
                
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </>
    );
}

export default ListarProdutos;