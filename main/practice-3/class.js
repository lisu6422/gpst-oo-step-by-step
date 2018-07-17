// Write your code here
module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.students = [];
        this.teachers = [];
    }

    assignLeader(student) {
        if (this.students.includes(student)) {
            this.leader = student.name;
            for (let i = 0; i < this.teachers.length; i++) {
                this.teachers[i].notifyLeaderAssigned("Jerry become Leader of Class 2");
            }
            return 'Assign team leader successfully.';
        }

        return 'It is not one of us.';
    }

    appendMember(student) {
        this.students.push(student);
        for (let i = 0; i < this.teachers.length; i++) {
            this.teachers[i].notifyStudentAppended("Jerry has joined Class 2");
        }
    }

    hasStudent(student) {
        if (this.students.includes(student))
            return true;
        return false;
    }
}