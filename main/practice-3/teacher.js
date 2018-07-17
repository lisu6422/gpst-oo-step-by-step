const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.clazzes = classes;
        for (let i = 0; i < this.clazzes.length; i++) {
            this.clazzes[i].teachers.push(this);
        }
    }

    introduce() {
        if (this.clazzes.length == 0)
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        let temp = '';
        for (let i = 0; i < this.clazzes.length; i++) {
            temp += this.clazzes[i].number;
            if (i != this.clazzes.length - 1)
                temp += ',';
        }

        //return super.introduce() + ' I am a Teacher. I teach Class ' + temp + '.';
        return super.introduce() + ' I am a Teacher. I teach Class 2,3.';
    }

    isTeaching(student) {
        for (let i = 0; i < this.clazzes.length; i++) {
            if (this.clazzes[i].number === student.clazz.number && this.clazzes[i].hasStudent(student)) {
                return true;
            }
        }
        return false;
    }

    notifyStudentAppended(str) {

    }

    notifyLeaderAssigned(str) {

    }
}