const nomeArquivo = 'Foto da Familia.Jpeg';

const validararquivo = (arquivo) => {
    const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1);

    if (extensao === 'JPG' || extensao === 'Jpeg' || extensao === 'git' || extensao === 'png') {
        console.log('Arquivo valido');
    } else {
        console.log('Arquivo invalido')
    }

}

validararquivo(nomeArquivo);