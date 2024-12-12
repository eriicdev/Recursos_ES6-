//antes do ES6 tinhamos que programar objetos usando fuções construutoras dessa forma abaixo

// function Pokemon (nome, tipo){
//     this.nome = nome;              
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico");  
// console.log(pikachu);








//com o ES6 nós podemos usar as CLASSES, que sao usadas da maneira a seguir.

class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    //nas classes passamos métodos dessa forma

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recepeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp);
    }
}


//herança com classes

class Pikachu extends Pokemon{
    constructor(){
        super("Pika", "DeRaio")
    }

    atacar(){
        console.log(`${this.nome} atacou com Choque do trovão`);
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recepeuAtaque();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();



const pikachu = new Pokemon("Pikaxuuu", "DiShocki");
// pikachu2.atacar('Choque Do trovão!');

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);