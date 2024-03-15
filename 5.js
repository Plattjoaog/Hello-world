const numerodocartao = '1111222233334444';

const numerosiniciais = numerodocartao.slice(0, 4);
const numerosfinais = numerodocartao.slice(12);

const numerocartaoformatado = `${numerosiniciais.padEnd(8, '*')}${numerosfinais.padStart(8, '*')}`;


console.log(numerocartaoformatado);