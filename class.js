class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.schoolName = 'Barishal Model School & Collage';
    }
}
const student1 = new Student(124, "Hasib");
const student2 = new Student(56, "Noman");
const student3 = new Student(12, 'Rakin');
console.log(student1, student2, student3);
