const isOk = true;
const pA = new Promise((resolve, reject) => {
  if (isOk) {
    resolve("Resuelve el valor de A");
  } else {
    //algo asyncronico
    reject("ERROR");
  }
});

/*  data es lo que yo asigno  a lo que la promesa está devolviendo */
//pA.then(data => console.log(data));
//pA.catch(err => console.log(err));

/* sirve para ambos casos */
//pA.then(data => console.log(data), result => console.log(result));

/*  cada .then es una nueva promesa */
/*pA.then() // => promesa  se resuelve a valor de A
  .then() // => promesa se consologuea
  .then(function (value) {
    // promesa D se rechaza
    console.log(value);
    throw new Error("Error nuevo");
  })
  .then(null, function (err) {
    // promesa E  error Nuevo
    console.log(err);
  }); // => promesa D*/

/*si se rechaza, se va directamente al catch */

/*pA.then() // pB se resuelve a valor de A
  .then() // pC resuelve el valor de A
  .then(function (value) {
    // pD se rechaza
    console.log(value);
    throw new Error("Error nuevo 1");
  })
  .then(function (value) {
    // pD se rechaza
    console.log(value);
    throw new Error("Error nuevo 2"); // no se ejecuta , por que en el error numero uno se rechaza
  })
  .then(null, function (err) {
    // promesa E  error Nuevo
    console.log(err);
  }); // => promesa D*/

pA.then() // pB se resuelve a valor de A
  .then() // pC resuelve el valor de A
  .then(function (value) {
    // pD se rechaza
    console.log(value);
  })
  .then()
  .then(function (value) {
    // pD se rechaza
    console.log(value); // como no tiene return , entonces devuelve undefined
    return { nombre: "Juan" };
  })
  .then(function (value) {
    // promesa E  error Nuevo
    console.log(value);
  }); // => promesa D

/*pA.then() // pB se resuelve a valor de A
    .then() // pC resuelve el valor de A
    .then(function (value) {
        // pD se rechaza
        console.log(value);
    })
    .then()
    .then(function (value) {
        // pD se rechaza
        console.log(value);
        return { nombre: "Juan" };
    })
    .then(function (value) {
        // promesa E  error Nuevo
        console.log(value);
    }); // => promesa D*/
