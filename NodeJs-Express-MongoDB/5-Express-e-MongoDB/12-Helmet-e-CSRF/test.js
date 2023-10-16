require('dotenv').config();

const test1 = 'mongodb+srv://Nomartsu:mdbram020418@aprendendomongodb.lfuk9if.mongodb.net/?retryWrites=true&w=majority';

const test2 = `%_:6{{R!)"c3dHx%X*,v6'Mv'c]Cv&-")?@JJW*`;

console.log(process.env.CONNECTION_STRING, process.env.CONNECTION_STRING === test1);
console.log(process.env.SESSION_SECRET, process.env.SESSION_SECRET === test2);