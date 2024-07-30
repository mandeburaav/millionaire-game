export interface IAnswers {
  text: string;
  correct: boolean;
  id: number;
}

export interface IQuestions {
  id: number;
  question: string;
  answers: IAnswers[];
  value: number;
}
