import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import Loader from '../../loader/Loader';
import CardProduto from '../cardProdutos/CardProduto';

function ListarProdutos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [lista, setLista] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;


  // Pode ignorar esse erro, que no caso estou criando um UseContext de useState, então o TypeScript fica perdido, mas na realidade não tem problema aqui. Até tem como resolver e parar de aparecer o erro, mas no momento não sei como

  /* const [context, setContext] = useContext(FiltroCat);

  function buscarPorCategoria() {
    context != '' &&
      setLista(
        produtos.filter((produto) => {
          return produto.categoria?.tipo === context;
        })
      );
  } */

  async function buscarProdutos() {
    try {
      await buscar('/produto', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
    setLista(produtos);
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarProdutos();
    setLista(produtos);
  }, []);

  /* useEffect(() => {
    buscarPorCategoria();
  }, [context]); */

  return (
    <>
      <div className="w-full grid place-items-center">
        <button
          className="p-2 rounded-2xl"
          onClick={() => {
            /* setContext(); */
          }}
        >
          Mostrar todos
        </button>
        <p className="font-semibold text-neutral-400">
          {/* {!context ? produtos.length : lista.length} */} resultados
        </p>
      </div>
      {produtos.length === 0 && <Loader />}
      <div className="flex">
        <div className=" -left-3 mx-auto my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* {lista.length > 0 ? (
            lista.map((produto) => <CardProduto key={produto.id} produto={produto} />)
            ) : (
              <p className="text-2xl">Hmm, não achamos nada! :(</p>
            )} */}
          {/* {!context ? (
            produtos.map((produto) => <CardProduto key={produto.id} produto={produto} />)
          ) : lista.length > 0 ? (
            lista.map((produto) => <CardProduto key={produto.id} produto={produto} />)
          ) : (
            <p className="text-xl font-semibold text-red lg:col-span-4 md:col-span-2">
              Hmm, não achamos nada! :(
            </p>
          )} */}
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;
