
function smallThenLarge(num1, num2) {
    if (num1 < num2) {
      return [num1, num2];
    } else {
      return [num2, num1];
    }
  }
  let result = smallThenLarge(5, 3);
  console.log(result); 
  
  
  
  console.log("got", smallThenLarge(10, 20), "expected", [10, 20]);
  console.log("got", smallThenLarge(5, 2), "expected", [2, 5]);
  console.log("got", smallThenLarge(4, -3), "expected", [-3, 4]);
  console.log("got", smallThenLarge(10.3, 9.5), "expected", [9.5, 10.3]);
  console.log("got", smallThenLarge(-14, -19), "expected", [-19, -14]);
  