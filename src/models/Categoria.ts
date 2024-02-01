import Produto from "./Produto";

export default interface Categoria {
    nome: ReactNode;
    id: number;
    nomeCategoria: string;
    tipo: string;
    produto?: Produto | null;
}