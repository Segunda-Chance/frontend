import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";
import { ToastAlerta } from "../utils/ToastAlerta";


interface FavContextProps {
    favoritarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparFav: () => void
    items: Produto[]
    quantidadeItems: number
}

interface FavProviderProps {
    children: ReactNode
}

export const FavContext = createContext({} as FavContextProps)

export function FavProvider({ children }: FavProviderProps) {

    // Estado que armazenará os Produtos do Carrinho
    const [items, setItems] = useState<Produto[]>([])

    // Estadoque retorna o número de itens do Carrinho
    const quantidadeItems = items.length

    // Função para adicionar Produtos no Carrinho
    function favoritarProduto(produto: Produto) {
        const indice = items.find(items => items.id === produto.id)
        if (indice !== undefined) {
            ToastAlerta('Este Produto já foi Adicionado!', 'info')
        } else {
            setItems(state => [...state, produto])
            ToastAlerta('Produto Adicionado!', 'sucesso')
        }
    }

    // Função para Remover um produto especifico do Favoritos
    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoFav = [...items]

        if (indice >= 0) {
            novoFav.splice(indice, 1)
            setItems(novoFav)
        }

    }

    // Função para Limpar o Carrinho
    function limparFav() {
        ToastAlerta('Favoritos Removidos com Sucesso', 'sucesso')
        setItems([])
    }

    return (
        <FavContext.Provider
            value={{ favoritarProduto, removerProduto, limparFav, items, quantidadeItems }}
        >
            {children}
        </FavContext.Provider>
    )
}