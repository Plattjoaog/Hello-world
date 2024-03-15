const cpf = '12345678900';
const cnpj = '12345678000199';

const validarCpf = (cpf) => {
    if (cpf.length != 14) {
        console.log('cpf invalido');

    } else {
        const cpfformato = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}, ${cpf.slice(6, 6)}`;
        console.log(cpfformato);
    }
}

validarCpf(cpf);

const validarCnpj = (cnpj) => {
    if (cnpj.length != 14) {
        console.log('cnpj invalido');

    } else {
        const cnpjformato = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}, ${cnpj.slice(5, 8)}, ${cnpj.slice(8, 12)}`;
        console.log(cnpjformato);
    }
}

validarCnpj(cnpj);