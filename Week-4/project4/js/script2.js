// // Exercise4.2:

// class Person {
// 	constructor(teacher, subject) {
// 		this.teacher = teacher;
// 		this.subject = subject;
// 	}

// 	teach(teacher, subject) {
// 		return this.teacher + " is now teaching " + this.subject;
// 	}
// }

// let Teacher = new Person("Karthik", "Javascript");
// console.log(Teacher.teach());

let Person = function(name, subject) {
	this.name = name;
	this.subject = subject;
};
Person.prototype.teach = function() {
	return this.name + " is now teaching " + this.subject;
}
// TODO: create the class Teacher and a method teach
let teacher = new Person("Karthik", "Javascript");
console.log(teacher.teach());