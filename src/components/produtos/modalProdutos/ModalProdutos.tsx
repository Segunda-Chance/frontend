import Popup from 'reactjs-popup';
import FormProdutos from '../formProdutos/FormProdutos';

import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css';

function ModalProdutos() {
    return (
        <>
            <Popup
                trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} modal>
                <div>
                    <FormProdutos />
                </div>
            </Popup>
        </>
    );
}

export default ModalProdutos;