import Produto from "./produto";

export default class RepositorioProdutos {
    itens: Produto[] = [new Produto("colher", 5.99),
                        new Produto("Mouse", 39.99),
                        new Produto("Teclado", 99.99),
                        new Produto("Monitor", 599.99),];

        obterTodos() {
            return this.itens;
        }

}   
