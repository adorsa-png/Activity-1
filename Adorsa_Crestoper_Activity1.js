const student = {
    
  // Properties
  name: "Adorsa, Crestoper B.",
  studentId: "2024-02347",
  course: "BSIT",
  yearLevel: 2,

  // Methods
  introduce() {
    return `Hello! My name is ${this.name}. I am a ${this.course} student.`;
  },

  displayInfo() {
    return `Student ID: ${this.studentId}\nName: ${this.name}\nCourse: ${this.course}\nYear Level: ${this.yearLevel}`;
  }
};

// Call the method from properties
console.log(student.introduce());
console.log(student.displayInfo());