//const { mostrarMensaje } = require('./helpers/mensajes.js');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
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
    }

    guardarDb(tareas._listadoArray);

    await pausa();
  } while (opt !== '0');
};

main();
