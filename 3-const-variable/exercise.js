/*
Ramon de Oliveira Farias tem 21 anos, pesa 65 kg
tem 1.8 de altura e seu IMC é de 21.666666666666668
Ramon de Oliveira Farias nasceu em 2002
*/

const fullName = 'Ramon de Oliveira Farias'

const age = 21

const weight = 65

const height = 1.80

let yearOfBirth

yearOfBirth = 2023 - age

let imc

imc = weight / (height*height)

console.log(`${fullName} tem ${age} anos, pesa ${weight}Kg, tem ${height}m de altura, nasceu em ${yearOfBirth}, e seu IMC é ${imc}.`)