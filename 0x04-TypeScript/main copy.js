"use strict";
class Teacher {
    constructor(firstName, lastName, fullTimeEmployee, location, yearsOfExperience, extra) {
        Object.defineProperty(this, 'firstName', { value: firstName, writable: false, configurable: false });
        Object.defineProperty(this, 'lastName', { value: lastName, writable: false, configurable: false });
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined)
            this.yearsOfExperience = yearsOfExperience;
        Object.assign(this, extra);
    }
}
// Example usage:
const teacher = new Teacher('John', 'Doe', true, 'NY', 10, { contract: true });
console.log(teacher);
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
