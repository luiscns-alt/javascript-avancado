let obj = (function () {
  let num1 = 5;
  let num2 = 3;

  function soma() {
    console.log(num1 + num2);
  }

  return {
    soma,
    setNum1: function (n) {
      num1 = n;
    },
  };
})();
