
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import CardProduto from './CardProduto'

interface CardProdutoProps {
  produto: Produto
}

function CardEditProduto({ produto }: CardProdutoProps) {
  return (
    <div className="flex flex-col w-full gap-0">
      <div className="m-auto">
        <CardProduto produto={produto} />
      </div>

      <div className="flex m-auto bg-rosa_2 w-56 mb-8 border-solid">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-1/2 py-2'>
          <Link to={`/editarproduto/${produto.id}`}>
            Editar
          </Link>
        </button>

        <button className='text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center w-1/2'>
          <Link to={`/deletarproduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            Deletar
          </Link>
        </button>
      </div>
    </div>

  )
}

export default CardEditProduto