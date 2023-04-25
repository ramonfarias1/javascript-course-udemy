let varA = 'A'; // B

let varB = 'B'; // C

let varC = 'C'; // A

// Maneira antiga de resolver:

// let backupA = varA

// varA = varB

// varB = varC

// varC = backupA

// Nova maneira de resolver:

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);