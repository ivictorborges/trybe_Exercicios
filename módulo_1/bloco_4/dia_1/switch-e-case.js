var status = 'outros';

switch (status) {
    case 'aprovada':
        console.log('Aprovada');
        break;
    case 'lista':
        console.log('Lista de espera');
        break;
    case 'reprovada':
        console.log('Reprovada');
        break;
    default:
        console.log('Não se aplica');
        break;
}