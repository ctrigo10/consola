const promesa = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resultado);
    }, 3000);
  });
};

//promesa(1, 3).then((resultado) => console.log('resultadoPromesa', resultado));
//console.log(respuesta);

(async () => {
  const resultadoAwait = await promesa(1, 3);
  console.log('resultadoAwait', resultadoAwait);
})();
