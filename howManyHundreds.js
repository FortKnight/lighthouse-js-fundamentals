function howManyHundreds(num){

  var rem = (num % 100)
return (num / 100) - (rem / 100)
}

console.log(howManyHundreds(1234));
