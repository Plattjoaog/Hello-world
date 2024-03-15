const celular = 99918888;

const fomatarcelular = (numero) => {
    let celularformatado;

    if (numero.length === 8) {
        celularformatado = `9 ${numero.slice(0, 4)} -${numero.slice(4)}`;
        console.log(celularformatado)
    } else if (numero.length === 9) {
        celularformatado = `${numero.slice(0, 1)} ${numero.slice(1, 5)} - ${numero.slice(5)}`
        console.log(celularformatado);
    } else if (numero.length === 10) {
        celularformatado = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)} -${numero.slice(6)}`
        console.log(celularformatado);
    } else if (numero.length === 11) {
        celularformatado = `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(3, 7)} -${numero.slice(7)}`
        console.log(celularformatado);
    } else {
        console.log('Numero invalido');
    }
}

fomatarcelular(celular);