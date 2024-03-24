export interface ICoreConcept {
  title: string;
  description: string;
  imgUrl: string;
}

export interface IExample {
  title: string;
  description: string;
  code: string;
}

export interface IExamples {
  [key: string]: IExample;
}
