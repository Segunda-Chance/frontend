import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import ListaCategoriasHome from "../listaCategorias/ListaCategoriasHome";


function FormCatListHome() {

    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const { usuario } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <div className='w-full pb-4 mt-40'>
                <ListaCategoriasHome categorias={categorias} getCategorias={buscarCategorias} />
            </div>
        </div>
    )
}

export default FormCatListHome