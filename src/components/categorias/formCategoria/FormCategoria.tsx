import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext"

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {

            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()

            }
        }

        useEffect(() => {
            if (id !== undefined) {
                buscarPorId(id)
            }
        }, [id])

        function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value
            })
        }

    
        async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            setIsLoading(true)

            if (id !== undefined) {
                try {
                    await atualizar(`/categorias`, categoria, setCategoria), {
                        headers: {
                            'Authorization': token
                        }
                    }
                    
                    alert('Tema atualizado com sucesso')
    
                } catch (error: any) {
                    if (error.toString().includes('403')) {
                        alert('O token expirou, favor logar novamente')
                        handleLogout()
                    } else {
                        alert('Erro ao atualizar o Tema')
                    }
                }
    
            } else {
                try {
                    await cadastrar(`/categorias`, categoria, setCategoria), {
                        headers: {
                            'Authorization': token
                        }
                    }
    
                    alert('Tema cadastrado com sucesso')
    
                } catch (error: any) {
                    if (error.toString().includes('403')) {
                        alert('O token expirou, favor logar novamente')
                        handleLogout()
                    } else {
                        alert('Erro ao cadastrar a Postagem')
                    }
                }
            }
    
    
            setIsLoading(false)
            retornar()
        }
        
        function retornar() {
            navigate("/categorias")
        }

        return (
            <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl text-center my-8  font-bold">
                    {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tipo" className=" font-bold">Tipo da Categoria</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui sua categoria"
                            name='tipo'
                            className="border-2 border-slate-400 rounded p-2"
                            value={categoria.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tipo" className=" font-bold">Nome da Categoria</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui sua categoria"
                            name='nomeCategoria'
                            className="border-2 border-slate-400 rounded p-2"
                            value={categoria.nomeCategoria}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="rounded font-bold bg-slate-400 hover:bg-slate-600
                     w-1/2 py-2 mx-auto flex justify-center"
                        type="submit">

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }

                    </button>
                </form>
            </div>
        );
    }

}

export default FormCategoria