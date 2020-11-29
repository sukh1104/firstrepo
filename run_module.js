var msg = require('./message.js');

// console.log(msg.SimpleMessage);
// msg.log('Hello World');

// console.log(msg.fistName + " "+ msg.lastName + '\n');

var person = new msg('James', 'Bond');
console.log(person.fullName());