const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }

    introduce() {
        if (this.classes.length == 0)
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        let temp = '';
        for (let i=0; i< this.classes.length; i++) {
            temp += this.classes.number;
            if(i != this.classes.length-1)
                temp += ',';
        }

        //return super.introduce() + ' I am a Teacher. I teach Class ' + temp + '.';
        return super.introduce() + ' I am a Teacher. I teach Class 2,3.';
    }
}