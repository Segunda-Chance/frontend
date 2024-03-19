import { toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
        style: {
          background: '#747c4e',
          color: 'white'
      }
      });
      break;

    case 'info':
      toast.info(mensagem, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          background: '#226384',
          color: 'white'
      },
        theme: 'colored',
        progress: undefined,
      });
      break;

    case 'erro':
      toast.error(mensagem, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          background: '#ba6f4d',
          color: 'white'
      },
        theme: 'colored',
        progress: undefined,
      });
      break;

    default:
      toast.info(mensagem, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      break;
  }
}