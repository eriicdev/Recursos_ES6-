function funcaoMuitoPesada() {
    let execucoes = 0 ;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0 ;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve (execucoes);
    } catch (e) {
        reject ('Deu erro');
    }
});


// console.log(funcaoMuitoPesada());

const promiseComParametro = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (`Logado com o usuário: ${login}`)
        }, 3000)
    })
}


async function execucaoPrincipal(){
    console.log("Inicio");

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametro('th@gmail.com', 5478412).then (resultado => {
        console.log(resultado);
    })
    
    try {
        const resultad = await funcaoMuitoPesadaPromise;
        console.log(resultad)
    } catch(e){
        console.log(e);
    }

    console.log("Fim");
}


execucaoPrincipal()