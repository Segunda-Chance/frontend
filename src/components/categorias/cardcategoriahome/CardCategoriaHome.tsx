import { useContext } from 'react';
import Categoria from '../../../models/Categoria';
import './CardCategoriaHome.css';
/* import { FiltroCat } from '../../../contexts/ListarCatContext'; */

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoriaHome({ categoria }: CardCategoriaProps) {
  /* const [context, setContext] = useContext(FiltroCat); */

  return (
    <div className='buttonnn'
      onClick={() => {
       /*  setContext(categoria.tipo); */
      }}
    >
      <button type="button">
        <div className="cardsHome">
          <div className="cardHome red">
            <img src={categoria.foto} alt="" />
          </div>
        </div>
      </button>
      <span className="spanDesc flex justify-center">{categoria.tipo}</span>
    </div>
  );
}

export default CardCategoriaHome;
