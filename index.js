function receivesAFunction(callback){
  callback();
}

function returnsANamedFunction() {
  function nameFun() {
      console.log("My named function");
  }
  return nameFun;
}


function returnsAnAnonymousFunction() {
  return function () {
      console.log("Anonymous function");
  };
}
