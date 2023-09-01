//const { mostrarMensaje } = require('./helpers/mensajes.js');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
  let opt = '';

  const tareas = new Tareas();

  const tareasDB = leerDb();

  tareas.cargarTareasFromArray(tareasDB);

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc);
        break;

      case '2':
        tareas.listadoCompleto();
        break;

      case '3':
        tareas.listarPendientesCompletadas(true);
        break;

      case '4':
        tareas.listarPendientesCompletadas(false);
        break;

      case '5':
        const ids = await mostrarListadoChecklist(tareas._listadoArray);
        tareas.toggleCompletas(ids);
        break;

      case '6':
        const id = await listadoTareasBorrar(tareas._listadoArray);
        if (id !== '0') {
          const ok = await confirmar('¿Estás seguro?');
          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada');
          }
        }
        break;
    }

    guardarDb(tareas._listadoArray);

    await pausa();
  } while (opt !== '0');
};

main();
