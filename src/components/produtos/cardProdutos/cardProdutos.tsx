import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <img src={produto.usuario?.foto} className='h-12 rounded-full' alt={produto.usuario?.nomeUsuario} />
          <h3 className='text-lg font-bold text-center uppercase'>{produto.usuario?.nomeUsuario}</h3>
          <img src={produto?.foto} className='h-12 rounded-full' alt={produto?.nomeProduto} />
          <h3 className='text-lg font-bold text-center uppercase'>{produto?.nomeProduto}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{produto.nomeProduto}</h4>
          <p>Preço: {produto.preco}</p>
          <p>{produto.descricao}</p>
          <p>Categoria: {produto.categoria?.tipo}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarproduto/${produto.id}`}
          className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarproduto/${produto.id}`}
          className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
