type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;

export type Tuple7<T> = Tuple<T, 7>;
export type Tuple5<T> = Tuple<T, 5>;

export type Question = {
  weight: number;
  question: string;
}

export type QuestionSectionType = {
  title: string;
  questions: [
    Question,
    Question,
    Question,
    Question,
    Question
  ]; // max 5 questions per section
}

export type PageDataType = {
  pageTitle: string;
  pageDescription: string;
}

export type QuestionSections = Tuple7<QuestionSectionType>;