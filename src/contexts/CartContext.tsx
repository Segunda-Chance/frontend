import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";


interface CartContextProps {
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

    // Estado que armazenará os Produtos do Carrinho
    const [items, setItems] = useState<Produto[]>([])

    // Estadoque retorna o número de itens do Carrinho
    const quantidadeItems = items.length

    // Função para adicionar Produtos no Carrinho
    function adicionarProduto(produto: Produto) {
        const indice = items.find(items => items.id === produto.id)
        if (indice !== undefined) {
            alert('Este Produto já foi Adicionado!',)
        } else {
            setItems(state => [...state, produto])
            alert('Produto Adicionado!',)
        }
    }

    // Função para Remover um produto especifico do Carrinho
    function removerProduto(produtoId: number) {
        const indice = items.findIndex(items => items.id === produtoId)
        let novoCart = [...items]

        if (indice >= 0) {
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }

    }

    // Função para Limpar o Carrinho
    function limparCart() {
        alert('Compra Efetuada com Sucesso',)
        setItems([])
    }

    return (
        <CartContext.Provider
            value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}
        >
            {children}
        </CartContext.Provider>
    )
}