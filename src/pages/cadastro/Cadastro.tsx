﻿import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { ToastAlerta } from '../../utils/ToastAlerta'


function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  console.log(usuario)

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
    console.log(confirmaSenha)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro')
      }
    } else {
      ToastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', 'info')
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>

      <div className="login-box">
        <h2>Cadastrar</h2>
        <form onSubmit={cadastrarNovoUsuario}>

          {/*  Nome */}
          <div className="user-box">
            <input type="text" id="nomeUsuario" name="nomeUsuario" value={usuario.nomeUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            <label className='text-2xl' htmlFor="nome">Nome</label>
          </div>

          {/* Usuario */}
          <div className="user-box">
            <input type="e-mail" id="usuario" name="usuario" value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            <label htmlFor="usuario">Usuario</label>
          </div>

          {/* Foto */}
          <div className="user-box">
            <input type="text" id="foto" name="foto" value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            <label htmlFor="foto">Foto</label>
          </div>

          {/* Senha */}
          <div className="user-box">
            <input type="password" id="senha" name="senha" value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            <label htmlFor="senha">Senha</label>
          </div>

          {/* Confirmar Senha */}
          <div className="user-box">
            <input type="password" id="confirmarSenha" name="confirmarSenha" value={confirmaSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)} />
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
          </div>

          {/* Retorno para o Login */}
          <div className="cadastro">
            <span >Ja possui uma conta?
              <Link to="/login" className=" hover:underline pl-2 flex-end">
                Login
              </Link>
            </span>
          </div>
          <div className='h-2'></div>
          {/* Button Cadastrar */}
          <button type='submit' className="buttonCadastrar">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true} /> :
              <span></span>
            }
            <span></span><span></span><span></span><span></span>
            Cadastrar
          </button>
        </form>
      </div>
    </>
  )
}

export default Cadastro