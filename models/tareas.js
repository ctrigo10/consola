const Tarea = require('./tarea.');

class Tareas {
  _listado = {
    abc: 123,
  };

  get _listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this._listadoArray.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Completado'.green : 'Pendiente'.red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  borrarTarea(id = '') {
    if (this._listado[id]) delete this._listado[id];
  }

  toggleCompletas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this._listadoArray.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }

  listarPendientesCompletadas(completadas = true) {
    let contador = 0;
    this._listadoArray.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? 'Compleado'.green : 'Pendiente'.red;
      if (completadas && completadoEn) {
        contador++;
        console.log(
          `${(contador + '.').green} ${desc} :: ${completadoEn.green}`
        );
      }

      if (!completadas && !completadoEn) {
        contador++;
        console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
      }
    });
  }
}

module.exports = Tareas;
