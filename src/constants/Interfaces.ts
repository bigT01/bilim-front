export interface Auth {
    id: string,
    token: string,
    role: string,
}

export interface CourseItemProps {
    id: string,
    name: string,
    num_lessons: number,
    num_students: number,
}

export interface StudentItem {
    id: string,
    name: string,
    age: number,
    grade: string,
    rating: number,
    avgGrade: number,
}

export interface subjectStudentsI {
    id: string,
    students: string[]
}

export interface MainStudent {
    id: string,
    full_name: string,
    attend: string,
}