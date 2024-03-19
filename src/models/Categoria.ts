import Produto from "./Produto";

export default interface Categoria {
    id: number;
    nomeCategoria: string;
    foto: string;
    tipo: string;
    produto?: Produto | null;
}