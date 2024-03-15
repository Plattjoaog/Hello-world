const cpf = '011.022.033-44'
const cnpj = '11.022.033/0001-44'

const removerpontuacao = (numero) => {
    let numeros = numero.replace('-', '').replace('/', '').split('.');
    let numerolimpo = '';

    for (const item of numeros) {
        numerolimpo += item;
    }


    console.log(numerolimpo);
}

removerpontuacao(cpf);
