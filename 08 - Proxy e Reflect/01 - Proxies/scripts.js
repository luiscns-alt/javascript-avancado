let myObj = {
  a: 1,
  b: 2,
};

let myProxy = new Proxy(myObj, {
  get: function (target, prop, receiver) {
    console.log(`Voce acessou ${prop}`);
    return target[prop];
  },
  set: function (target, prop, value) {
    if (prop !== "a" && prop !== "b") {
      return false;
    }
    target[prop] = value;
    return true;
  },
});
