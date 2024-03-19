import { useState } from 'react';
import FormCatListHome from '../../components/categorias/categoriaDetalhes/FormCatListHome';
import Cta from '../../components/cta/Cta';
import Features from '../../components/features/Features';
import ListarProdutos from '../../components/produtos/listarProdutos/ListarProdutos';
import Stats from '../../components/stats/Stats';
import './Home.css';

function Home() {
  const [filtro, setFiltro] = useState('');

  return (
   /*  <FiltroCat.Provider value={[filtro, setFiltro]}> */
      <div className=" bg-white_1">
        <div>
          <Cta />
        </div>
        {/*  Puxar a categoria */}
        <div className="flex text-center flex-col">
          <br />
          <div className="divInfo flex text-center flex-col">
            <span className="infoProduto flex text-center  justify-center m-auto items-center">
              <img
                className="imginfo pr-3 "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nO3RQREAIAwDwbiqK8TUMCjgydDH7swZSBIAAAAAAAAAAAAAAICZVtdWXTf4/Q8AAAAAAAAAAAAAAAB54gAa0p8x49LrUAAAAABJRU5ErkJggg=="
              />
              Categorias
              <img
                className="imginfo pl-3 "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nO3RQREAIAwDwbiqK8TUMCjgydDH7swZSBIAAAAAAAAAAAAAAICZVtdWXTf4/Q8AAAAAAAAAAAAAAAB54gAa0p8x49LrUAAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
        </div>
        <FormCatListHome />

        {/*  Puxar Produtos */}
        <div className="flex text-center flex-col">
          <br />
          <div className="divInfo flex text-center flex-col">
            <span className="infoProduto flex text-center  justify-center m-auto items-center">
              <img className="imginfo pr-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nO3RQREAIAwDwbiqK8TUMCjgydDH7swZSBIAAAAAAAAAAAAAAICZVtdWXTf4/Q8AAAAAAAAAAAAAAAB54gAa0p8x49LrUAAAAABJRU5ErkJggg==" />
              Produtos
              <img className="imginfo pl-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nO3RQREAIAwDwbiqK8TUMCjgydDH7swZSBIAAAAAAAAAAAAAAICZVtdWXTf4/Q8AAAAAAAAAAAAAAAB54gAa0p8x49LrUAAAAABJRU5ErkJggg==" />
            </span>
          </div>
        </div>
        <ListarProdutos />
        <Stats />
        <Features />
      </div>
   /*  </FiltroCat.Provider> */
  );
}

export default Home;
