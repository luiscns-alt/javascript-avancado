let myNumber = 1285;

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "JPY",
});

console.log(formatter.format(myNumber));
