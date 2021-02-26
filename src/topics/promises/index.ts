const myFistPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exito!");
  }, 3000);
});

function loadItem(id: number): Promise<{ id: number }> {
  return new Promise((resolve) => {
    console.log("Load item", id);
    setTimeout(() => {
      resolve({ id: id });
    }, 2000);
  });
}

let item1, item2;
loadItem(1)
  .then((res) => {
    item1 = res;
    return loadItem(2);
  })
  .then((res) => {
    item2 = res;
    console.log("done!");
  });

myFistPromise.then((successValue) => {
  console.log(successValue);
});

Promise.all([loadItem(1), loadItem(2)]).then((res) => {
  [item1, item2] = res;
  console.log("done!");
});
