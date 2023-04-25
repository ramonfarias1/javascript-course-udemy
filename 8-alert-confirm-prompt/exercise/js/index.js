let number1 = prompt('Enter a number')

let number2 = prompt('Enter another number')

console.log(number1, typeof number1)
console.log(number2, typeof number2)

number1 = Number(number1)
number2 = Number(number2)

console.log(number1, typeof number1)
console.log(number2, typeof number2)

let result = number1 + number2

alert(`the sum of the two numbers is ${result}`)