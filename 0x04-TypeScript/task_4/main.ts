export const cpp = 'Cpp Subjects';
export const java = 'Java Subjects';
export const react = 'React Subjects';

// Update the import path if the correct location is './subjects'
import { Cpp, Java, React } from './subjects';

export const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
const cppSubject = new Cpp();
cppSubject.teacher = cTeacher;
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher(cTeacher));

console.log('Java');
const javaSubject = new Java();
javaSubject.teacher = cTeacher;
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher(cTeacher));

console.log('React');
const reactSubject = new React();
reactSubject.teacher = cTeacher;
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher(cTeacher));
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher(cTeacher));