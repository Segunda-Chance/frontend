import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import FormCategoria from "../formCategoria/FormCategoria";
import ListaCategorias from "../listaCategorias/ListaCategorias";


function FormCatList() {

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
            <div className='w-3/4 pb-4'>
                <FormCategoria categorias={categorias} setCategorias={setCategorias} />
            </div>
            
            <div className='w-full pb-4 mt-40'>
                <ListaCategorias categorias={categorias} getCategorias={buscarCategorias} />
            </div>
        </div>
    )
}

export default FormCatList