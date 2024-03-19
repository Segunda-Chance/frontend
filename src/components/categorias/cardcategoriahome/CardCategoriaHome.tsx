import Categoria from '../../../models/Categoria';
import './CardCategoriaHome.css';


interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoriaHome({ categoria }: CardCategoriaProps) {

  return (
    <div className='buttonnn'
      onClick={() => {

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
