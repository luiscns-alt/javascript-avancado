let Soma = (function () {
  let num1 = 5;
  let num2 = 5;

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

let Sub = (function () {
  let num1 = 3;
  let num2 = 2;

  function sub() {
    console.log(num1 - num2);
  }

  return {
    sub,
    setNum1: function (n) {
      num1 = n;
    },
  };
})();
console.log(Soma.soma());
