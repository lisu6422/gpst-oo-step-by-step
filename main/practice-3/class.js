// Write your code here
module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.students = [];
    }

    assignLeader(student) {
        if(this.students.includes(student))
        {
            this.leader = student.name;
            
            return 'Assign team leader successfully.';
        }
        
        return 'It is not one of us.';
    }

    appendMember(student) {
        this.students.push(student);
    }

    hasStudent(student) {
        if (this.students.includes(student))
            return true;
        return false;
    }
}