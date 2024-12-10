let meuMap = new Map();      
meuMap.set("nome", "gian"); //set é usado para adicionar item ao map
meuMap.set("Stack", "HTML, CSS, JS");
console.log(meuMap);


//para fazer a recuperação de algum item usamos o get, no exemplo abaixo estamos recuperando o item nome.
const nome = meuMap.get("nome");

console.log(nome);


// Para Recuperar a quantidades de itens dentro do map usamos o atributo size, no exemplo abaixo dará 1, pois no meuMap só tem um item que é o nome.
console.log(meuMap.size);


//Para fazer a verificação se determinada chave existe dentro de um map usamos a função has e o valor que queremos que ele preocure se existe dentro do map. e isso retornará verdadeiro ou falso. no exemplo abaixo queremos saber se nome existe dentro do map meumap.
console.log(meuMap.has("nome"));


//fazendo iterações, nesse exemplo estamops recuperando as chaves de meumap, que sao = nome e stack
for (let chave of meuMap.keys()) {
    console.log(chave);
}


//mesmo exemplo porem agora recuperando os valores das chaves.
for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// excluindo alguma chave do meumap
meuMap.delete("Stack");
console.log(meuMap);

//para remover todos os itens de dentro do map usamos a função clear.
meuMap.clear();

console.log(meuMap.size); //aqui esperamos um retorno de 0, pois logo acima limpamos o map com o clear.




const cpfs = new Set();

//para adicionar um item ao set usamos add.
cpfs.add('87548962114')
cpfs.add('39548965514')
cpfs.add('02448962114')

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
});


//como remover itens duplicados de um array usando o Set, precisamos apenas converter o array, em um set que isso ja resove, pois o Set não aceita valores duplicados.

const array = ["Erik", "joao", "maria", "Erik"]  //nesse exemplo de array duplicamos o valor "Erik";
console.log(array);

const arrayComoSet = new Set([...array]); ///aqui usamos o spread e em seguida colocamos o array como parametro do Set, oque ja fez a conversão do array para set, e o set ja removeu os valores duplicados que no caso era "Erik".
console.log(arrayComoSet);

//como trazer os itens sem estarem duplicados de volta para um array:
const arraySemItemDuplicado = [...arrayComoSet];
console.log(arraySemItemDuplicado);   //dessa forma os items voltam a ser um array porem nao estao mais duplicados

// para diferenciarmos um set de um array, podemos usar: set usa {}, em qunato arrays [].