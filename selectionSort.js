const livro = require('./llsitaLivros');
const menorValor = require('./menorValor');

for(let atual =0 ; atual< livro.length; atual++);{
    let menor = menorValor(livro, atual)

    let livroAtual = livro[atual]; 
    console.log('livro atual' , livro[atual])
    let livroMenorPreco = livro[menor];
    console.log('livro menor preco' , livro[atual])

    livro[atual] = livroMenorPreco
    livro[menor] = livroAtual

}

console.log(livro)
