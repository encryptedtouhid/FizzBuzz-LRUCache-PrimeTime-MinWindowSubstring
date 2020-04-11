function FizzBuzz(num)
{
  let result = "";
  for (var i = 1; i <= num; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    result = result + " " + (f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }
  return result;
}

console.log(FizzBuzz(50));