(async function () {
  function sum(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    });
  }

  let [result1, result2] = await Promise.all([sum(5, 3), sum(5, 5)]);
  console.log(result1);
  console.log(result2);
})();
