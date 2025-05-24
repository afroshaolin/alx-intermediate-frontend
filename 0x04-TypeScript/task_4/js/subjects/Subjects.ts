import { Teacher } from '../subjects/Teacher';

namespace Subjects {
    export class Subject {
        teacher!: Teacher;
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}

export class Cpp extends Subjects.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingC
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

export class Java extends Subjects.Subject {
    getRequirements() {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingJava
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

export class React extends Subjects.Subject {
    getRequirements() {
        return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingReact
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

