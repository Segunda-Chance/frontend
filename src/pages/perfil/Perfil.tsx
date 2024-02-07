import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'
import "../../models/UsuarioLogin"



function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', "")
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden relative'>
        <img 
            className='object-cover border-white  animate-pulse ' 
            src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/baner2.png?updatedAt=1707248808778" 
            alt="Capa do Perfil" />
    
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
            <img 
                className='rounded-full w-50 h-20 mx-auto  animate-pulse transform transition-transform duration-500 hover:scale-110' 
                src="https://ik.imagekit.io/53urd0gwk/Segunda%20Chance/perfil.jpg?updatedAt=1707302213828"
                alt={`Foto de perfil de ${usuario.nomeUsuario}`} />
    
            <div 
                className="mt-4 h-32 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nomeUsuario} </p>
                <p>Email: {usuario.usuario}</p>
                <p><br/>Endereço: Rua Larangeiras, 110</p>
                <p>CEP: 09763-100</p>
            </div>
        </div>
    </div>
    
    )
}

export default Perfil

