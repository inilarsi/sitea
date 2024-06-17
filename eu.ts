type Student = {
    name: string;
    age: number;
};

type PersonalInfo = Pick<Student, "name" | "age">;
