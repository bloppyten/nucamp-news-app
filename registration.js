class Student {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

// Bootcamp class
class Bootcamp {
	constructor(name, level, students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}

	registerStudent(studentToRegister) {
		if (!studentToRegister.name || !studentToRegister.email) {
			console.log("Invalid name or email");
			return false;
		}
		for (const student of this.students) {
			if (student.email === studentToRegister.email) {
				console.log("This email has already been registered.");
				return false;
			}
		}
		this.students.push(studentToRegister);
		console.log(`Registration successful for ${studentToRegister.name} in ${this.name}`);
		return true;
	}

	listStudents() {
		if (this.students.length === 0) {
			console.log(`No students are registered to the ${this.name} bootcamp`);
			return false;
		} else {
			console.log(`The students registered in ${this.name} are`);
			for (let student of this.students) {
				console.log(`Name: ${student.name}, Email: ${student.email}`);
			}
			return true;
		}
	}
}
// End Bootcamp Class
//Task 1 testing
testStudent = new Student("Bugs Bunny", "bugs@bunny.com");
console.log(testStudent);
if (testStudent.name === "Bugs Bunny" && testStudent.email === "bugs@bunny.com") {
	console.log("Task 1: pass");
}

//Task 2 testing
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (
	reactBootcamp.name === "React" &&
	reactBootcamp.level === "Advanced" &&
	Array.isArray(reactBootcamp.students) &&
	reactBootcamp.students.length === 0
) {
	console.log("task 2: pass");
}
//Task 3 testing
const runTest = (bootcamp, student) => {
	const attemptOne = bootcamp.registerStudent(student);
	const attemptTwo = bootcamp.registerStudent(student);
	const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
	if (attemptOne && !attemptTwo && !attemptThree) {
		console.log("TASK 3: PASS");
	}

	//Task 4 testing
	bootcamp.registerStudent(new Student("Babs Bunny", "babs@bunny.com"));
	if (bootcamp.listStudents()) {
		console.log("TASK 4: PASS 1/2");
	}
	bootcamp.students = [];
	if (!bootcamp.listStudents()) {
		console.log("TASK 4: PASS 2/2");
	}
};
console.log(runTest(reactBootcamp, testStudent));
