import { Java } from './0x04-TypeScript/task_4/js/subjects/Java';

describe('Java', () => {
    let java: Java;

    beforeEach(() => {
        java = new Java();
    });

    describe('getRequirements', () => {
        it('should return the requirements string', () => {
            expect(java.getRequirements()).toBe('Here is the list of requirements for Java');
        });
    });

    describe('getAvailableTeacher', () => {
        it('should return "No available teacher" if experienceTeachingJava is undefined', () => {
            const teacher = { firstName: 'John', lastName: 'Doe' };
            expect(java.getAvailableTeacher(teacher as any)).toBe('No available teacher');
        });

        it('should return "No available teacher" if experienceTeachingJava is 0', () => {
            const teacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingJava: 0 };
            expect(java.getAvailableTeacher(teacher)).toBe('No available teacher');
        });

        it('should return "Available Teacher: <firstName>" if experienceTeachingJava is greater than 0', () => {
            const teacher = { firstName: 'Alice', lastName: 'Brown', experienceTeachingJava: 3 };
            expect(java.getAvailableTeacher(teacher)).toBe('Available Teacher: Alice');
        });


    });
});