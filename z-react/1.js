const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("Succeeded!");
    }, 1000);
  } else {
    reject("Failed!");
  }
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });