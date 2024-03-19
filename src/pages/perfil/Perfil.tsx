import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'
import "./Perfil.css"


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
        <>
        <Link to="/perfilEdit" className='pl-96 ml-12 flex pb-7'>Editar</Link>
            <div className='flex-col flex items-center' >
                <div className="profile ">
                <div className="profile-bg"></div>
                <section className="containerr">
                    <aside className="profile-image flex">
                    <a className="camera" href="#">
                        <img src={usuario.foto} alt="" />
                    </a>
                    </aside>
                    
                    <section className="profile-info">
                    <h1 className="first-name">{usuario.nomeUsuario}</h1>
                    <h2>Dados do Usuario</h2> 
                    
                    <span className='text-lg font-semibold'>Usuario: </span>
                    <span className='text-lg'>{usuario.usuario}</span><br />

                    <span className='text-lg font-semibold'>Senha:</span>
                    <span className='text-lg'>{usuario.senha}</span>

                    </section>
                </section>
                <div className="statistics">
                    <p className='flex justify-end'><strong>29</strong> Produtos</p>
                    <p><strong>6</strong> Likes</p>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Perfil