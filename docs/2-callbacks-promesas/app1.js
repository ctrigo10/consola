const operation = (numero1, numero2, callback) => {
  //return callback(numero1, numero2);

  return setTimeout(() => {
    callback(numero1, numero2);
  }, 3000);
};

const asyncrono = operation(5, 3, (a, b) => {
  console.log(a + b);
});

// const op1 = operation(5, 3, (a, b) => a + b);

// const op2 = operation(5, 3, (a, b) => a - b);

// const op3 = operation(5, 3, (a, b) => a * b);

// const op4 = operation(5, 3, (a, b) => a / b);

// console.log(op1, op2, op3, op4);
