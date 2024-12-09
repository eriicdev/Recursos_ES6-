        //forma de fazer uma lógica de soma usando o arguments

function somar(){
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
};

console.log(somar(10, 30, 50, 100));


        //fazendo com Rest Operator o mesmo exemplo
function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total +=numeroAtual;
        return total;
    }, 0)  //aqui estou falando o valor inicial, ou seja começa em 0
    return soma;
}

console.log(somarComRest(10, 20, 30));


        //fazendo com Spread Operator o mesmo exemplo
const numeros = [1,2,3,4];
console.log(...numeros);

const timesDeFutebolDeSp = ['Santos', 'Palmeiras', 'São Paulo','Bragantino'];
const timesDeFutebolDoRio = ['Flamengo', 'Vasco', 'Florminense', 'Faísca-Fogo'];

const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);

console.log(timesDeFutebol);