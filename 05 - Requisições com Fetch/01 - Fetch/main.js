(async function () {
  var response = await fetch(
    "https://api.github.com/search/repositories?q=javascript"
  );
  var myData = await response.json();
  console.log(myData);
})();
