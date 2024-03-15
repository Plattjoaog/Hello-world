const comentario = 'Esse COVID é muito perigoso e estamos em pandemia!';

const achouCovid = comentario.toLocaleLowerCase().includes('Covid');
const achouPandemia = comentario.toLocaleLowerCase().includes('pandemia');

if (achouCovid || achouPandemia) {
    console.log('comentario bloqueado por conter palavras proibidas');
} else {
    console.log('Comentario autorizado')
}
