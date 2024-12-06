                //EXEMPLO PARA ACESSAR OS ARRAYS COM FOR
const redesSociais = ['facebook', 'instagram', 'Twitter'];

for (let i = 0; i< redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
};

                //EXEMPLO PARA ACESSAR OS ARRAYS COM FOREACH
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
});


                //EXEMPLO PARA ACESSAR OS ARRAYS COM MAP
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Front-End'
    }
})
console.log(alunos2);

                //FAZENDO UMA BUSCA DENTRO DO ARRAY ALUNOS PELA PAULA
const paula = alunos2.find(function(item){
    return item.nome == "Paula";
});

console.log(paula);


                //FAZENDO UMA BUSCA PELO INDICE DA PAULA DENTRO DO ARRAY
const indiceDapaula = alunos2.findIndex(function(item){
    return item.nome == "Paula";
});

console.log(indiceDapaula);

                //FAZENDO A VERIFICAÇÃO SE TODOS OS ALUNOS ATENDEM NOSSA CONDIÇÃO
alunos2.push({
    nome: 'João',
    curso: 'Back-End'
});

const todosAlunosSaoFrontend = alunos2.every(function(item){
    return item.curso == "Front-End"
})

console.log(todosAlunosSaoFrontend);

                //FAZENDO A VEREIFICAÇÃO SE PELO MENOS UM ALUNO ATENDE NOSSA CONDIÇÃO
const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso == 'Back-End' || item.curso == 'Front-End';
})

console.log(existeAlgumAlunoDeBackend);

                //FAZENDO UM FILTRO E RETORNANDO APENAS ALUNOS DE BACK END
const alunosdeBackEnd = alunos2.filter(function(item){
    return item.curso == 'Back-End';
});

console.log(alunosdeBackEnd);


                //FAZENDO A REDUÇÃ DOS NUMEROS DO ARRAY, SOMADOS DAO 70
const numbers = [10, 20, 30, 10];

const soma = numbers.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

        //mesmo exemplo de cima so que com o for tradicional
let somaComFor = 0;
for (let i = 0; i < numbers.length; i++){
    somaComFor += numbers[i];
}

console.log(somaComFor);

        //mesmo exemplo sendo usado para strings
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
},'');

console.log(nomesDosAlunos);