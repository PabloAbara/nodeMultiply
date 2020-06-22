

const {
  crearArchivo,
  listarTabla
} = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

let comando = argv._[0];
// console.log(argv);

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(archivo => console.log(`La tabla ha sido listada!!`))
      .catch(err => console.log('ERROR:', err));
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`El archivo ${archivo} ha sido creado!!`))
      .catch(err => console.log('ERROR:', err));
    break;

  default:
    console.log("Comando no reconocido");

}


// Requires, Packages,
// se ocupa el --save para que se guarde en el package .json
// NPM INIT cuando quiera bajar los packages para una app
// devDependencies es para que se preserve sólo en el ambiente de desarrollo
// Uso de la consola, existencia de "process" y "module" como variables globales
