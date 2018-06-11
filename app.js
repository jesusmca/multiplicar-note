const colors = require('colors/safe');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Imprime en archivo la tabla de multiplicar de acuerdo a un limite', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 9
        }
    })
    .help()
    .argv;
// const fs = require('express'); En la doc de NODE no existe
// const fs = require('./fs'); Es el path de donde se encuentra el archivo que nosotros creamos y que se encuentra en algun lado que nosotros definamos
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no desconocido.');


}

// let argv2 = process.argv;
// console.log('Limite: ', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo } `))
//     .catch(err => console.log(err));