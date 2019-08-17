const argv = require('./config/yargs').yargs
const colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
  case 'crear':
    const tarea = porHacer.crearTarea(argv.descripcion);
    break;
  case 'listar':
    const listar = porHacer.listar();
    for(let tarea of listar){
      console.log(colors.green("==========Por Hacer============"));
      console.log(tarea.descripcion);
      console.log(tarea.completado);
      console.log(colors.green("==============================="));
    }
    break;
  case 'actualizar':
    const actualiza = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualiza);
    break;
  
  case 'borrar':
  console.log(argv.descripcion);
    const borrar = porHacer.borrar(argv.descripcion);
      console.log(borrar);
    break;
  
  default:
    console.log('comando no valido');
}