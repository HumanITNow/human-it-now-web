
export interface Question {
    prefix: string;
    suffix: string;
    question: string;
    options: string[];
    answer: string | string[];
    additionalInfo: string | null;
    // multiple: boolean;
}

export interface Questionnaire {
    id: string;
    questions: Question[];
}