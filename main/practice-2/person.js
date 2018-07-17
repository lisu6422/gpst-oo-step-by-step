// Write your code here

module.exports = class Pesron{
    constructor(name, age){
        
        this.name = name;
        this.age = age;
    }

    introduce(){
        return 'My name is ' +this.name + '.' + ' I am 21 years old.';
    }
}