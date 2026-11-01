const student = { 
  // Required Properties
  name: "Juan Dela Cruz",
  studentId: "2026-001",
  course: "BSIT",
  yearLevel: 2,

  // Required Methods using 'this'
  introduce() {
    console.log(`Hello! My name is ${this.name}.`);
    console.log(`I am a ${this.course} student.`);
  },

  displayInfo() {
    console.log(`Student ID: ${this.studentId}`);
    console.log(`Name: ${this.name}`);
    console.log(`Course: ${this.course}`);
    console.log(`Year Level: ${this.yearLevel}`);
  }
};

// Calling both methods
student.introduce();
student.displayInfo();