import Produto from "./Produto";

export default class RepositorioProdutos {
        itens: Produto[] = [new Produto("chicara", 5.99),
                            new Produto("Mouse", 39.99),
                            new Produto("Teclado", 99.99),
                            new Produto("Monitor", 599.99),];

        obterTodos() {
            return this.itens;
        }
        novo(nome: string, preco: number) {
            const novoProduto = new Produto(nome, preco);
            this.itens.push(novoProduto);
        }

        obterProCodico(codigo: string){
            const produto = this.itens.find((produto) =>{return produto.codigo === codigo});
            return produto;
        }

        alterarPorCodigo(codigo: string, nome?: string, preco?: number){
            const indice = this.itens.findIndex((produto)=>produto.codigo === codigo);
            if(indice >=0 && indice < this.itens.length){
                if (nome) {
                    this.itens[indice].nome = nome;
                }
                
                if (preco){
                    this.itens[indice].preco = preco;
                }
            }

        }
   
        deletarPorCodigo(codigo: string){
            const dadosAtualizados = this.itens.filter((produto)=>produto.codigo!==codigo);
            this.itens = [...dadosAtualizados];
        }
}   