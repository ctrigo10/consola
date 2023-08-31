require('colors');

const mostrarMensaje = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('=============================='.green);
    console.log(' Selecciona una opción ');
    console.log('=============================='.green);

    console.log(`${'1.'.green} Creara Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas completadas`);
    console.log(`${'4.'.green} Listar Tareas completadas`);
    console.log(`${'5.'.green} Complete tarea(s)`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Seleccione una opcion: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  mostrarMensaje,
};
