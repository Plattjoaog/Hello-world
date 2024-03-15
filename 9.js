const nome = 'João Platt';

const geradorNickname = (nome) => {
    const nomes = nome.trim().toLowerCase().split(' ');
    let nomesemespaco = '';


    for (const item of nomes) {
        nomesemespaco += item;
    }

    const nickname = nomesemespaco.slice(0, 12)

    console.log(`@${nickname}`);
}

geradorNickname(nome);