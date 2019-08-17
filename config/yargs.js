const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'descripcion de la tarea'
}

const completado = {
  default: true,
  alias: 'c',
  desc: 'completa tarea'
}

const yargs = require('yargs')
.command('crear','crea una tarea', {descripcion})
.command('actualizar','Actualiza el estado de una tarea a completado', {descripcion, completado})
.command('borrar','Borra elemento',{descripcion})
.help()
.argv

module.exports= {
  yargs
}