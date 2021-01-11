export interface Curso {
    id: number;
    name: string;
    featured: boolean;
    image: File;
    language: 'en' | 'es';
    price: number;
    duration: number;
    lessons: number;
    deadline: Date;
    students: number;
    summary: string;
    instructor: number;
    category: number;
}
