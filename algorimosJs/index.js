const listaLivros = require ('./array');

function margeSort(array){

    if(array.length > 1){
        const meio = Math.floor(array.length /2);
        const part1 = margeSort(array.slice(0 , meio));
        const part2 = margeSort(array.slice(meio, array.length)); 
        array = ordena(part1,part2);

        
    }
    return array;
}

function ordena(parte1,parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

}

console.log(margeSort(listaLivros));