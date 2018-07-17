const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.klass = clazz;
    }

    introduce(){
        if(this.klass.leader === this.name)
            return super.introduce() + ' I am a Student. I am Leader of Class 2.';
        return super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.';

    }
}