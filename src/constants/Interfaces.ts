export interface Auth {
    id: string,
    token: string,
    role: string,
}

export interface CourseItemProps {
    id: string,
    courseName: string,
    lessonsNumber: number,
    studentsNumber: number,
}

export interface StudentItem {
    id: string,
    name: string,
    age: number,
    grade: string,
    rating: number,
    avgGrade: number,
}