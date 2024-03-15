const validaremail = (email) => {
    let emailvalido = true;

    if (email.indexOf('@') < 0) {
        emailvalido = false;
    } else if (email.indexOf('.') < 0) {
        emailvalido = false;
    } else if (email.indexOf('.') === 0) {
        emailvalido = false;
    } else if (email.indexOf('.') === email.length - 1) {
        emailvalido = false;
    }
    if (emailvalido) {
        console.log('Email valido');
    } else {
        console.log('Email invalido')
    }
}

validaremail('joao@Grupoviladofarol.com');
validaremail('joao@Grupoviladofarol.com.br');
validaremail('joao@Grupoviladofarol.io');
validaremail('joao@Grupo');
validaremail('joao.platt@.');
validaremail('joao.@grupo');
validaremail('.@');
validaremail('@.');
validaremail('joao.platt@grupo.');
validaremail('.platt@grupo.');
validaremail('.platt@grupo');

