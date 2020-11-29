// module.exports = 'Learning about modules';
exports.SimpleMessage = 'Hello World';

module.exports.log= function (msg) {
    console.log(msg);
}


module.exports = {
    fistName : 'John',
    lastName : 'Smith'
}

module.exports = function (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + ' ' + lastName;
    }

}