localStorage;

localStorage.setItem("nome", "Luis");

localStorage.getItem("nome");

let myObj = { nome: "luis" };

console.log(localStorage.setItem("nome", myObj));
console.log(localStorage.setItem("nome", JSON.stringify(myObj)));

localStorage.getItem("nome");
var myobjl = localStorage.getItem("nome");
JSON.parse(myobjl);

localStorage.nome;
localStorage["nome"];

localStorage.removeItem("nome");
localStorage.clear();
