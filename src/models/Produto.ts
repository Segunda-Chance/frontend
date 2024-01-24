import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto{
id: number;
descricao: string;	
foto: string;	
nomeProduto: string;
preco: number;
categoria?: Categoria | null;
usuario?: Usuario | null;
}