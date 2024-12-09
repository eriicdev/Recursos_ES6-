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

            //forma sem Spread de juntar 2 arrays.
const timesDeFutebol1 = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);   
            //forma com o Spread
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol);


//nesse exemplo, o carro da ana tapegando todas as caracteristicas do carro da julia, mudamos apenas o motor. USANDO O SPREAD.

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
} 

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia);
console.log(carroDaAna);

            //DESESTRUTURAÇÃO DE OBJETOS

const { motor: motorDoCarroDaAna} = carroDaAna;          //acessou a propriedade motor, e deu um apelido para nao dar problema na hora de declarar o motor do carro da julia
const { motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

            //DESESTRUTURAÇÃO DE ARRAYs

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);