const fs = require('fs');

let tareas = [];

const save = ()=>{
  let data=JSON.stringify(tareas)
  fs.writeFile('db/data.json',data,err=>{
    if(err){
      console.log(error)
    }
  })
}

const cargarDB = () => {
  try{
    tareas = require('../db/data.json');
  }catch(error){
    tareas = []
  }
}

const crearTarea = (descripcion)=>{
  
  cargarDB()   
  
  const elemento = {
    descripcion,
    completado: false
  }
   
  tareas.push(elemento);
  save()
  return elemento
  
}

const listar = () => {
  cargarDB()
  return tareas;
  
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = tareas.findIndex( (tarea) => tarea.descripcion === descripcion)
  if (index >= 0) {
    tareas[index].completado = completado
    save()
    return true
  }else {
    return false
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let index = tareas.findIndex( (tarea) => tarea.descripcion === descripcion)
  if ( index >= 0) {
    tareas.splice(index,1)
    save()
    return true
  }else {
    return false
  }
}

module.exports = {
  crearTarea,
  listar,
  actualizar,
  borrar
}