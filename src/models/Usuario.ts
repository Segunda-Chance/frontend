import Produto from "./Produto";

export default interface Usuario {
    id: number;
    nomeUsuario: string;
    usuario: string;
    foto: string;
    senha: string;
    produtos?: Produto | null;
}