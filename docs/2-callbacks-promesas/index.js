// Callback
function getSwDataCb(id, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', `https://pokeapi.co/api/v2/berry/${id}`, false); // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    let res = JSON.parse(request.responseText);
    callback(null, res);
  } else {
    callback('Error');
  }
}

// Promise
function getSwDataPromise(id) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/berry/${id}`, false); // `false` makes the request synchronous
    request.send();

    if (request.status === 200) {
      let res = JSON.parse(request.responseText);
      resolve(res.item);
    } else {
      callback('Error');
    }
  });
}

// getSwDataCb('5', (err, result) => {
//   if (err) return console.log(err);
//   console.log(result);
// });

getSwDataPromise(2)
  .then((result) => {
    console.log(result);
  })
  .then()
  .catch((err) => {
    console.log(err);
  });

// (async () => {
//   const resultadoAwait = await getSwDataPromise('6');
//   console.log('resultadoAwait', resultadoAwait);
// })();

console.log('FINAL!!');
