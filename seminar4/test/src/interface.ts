export interface IRawData {
  [year: number]: ICard[][];
}

export interface INewCardProps {
  rawData: IRawData;
  year: number;
  month: number;
  setUserData: (value: []) => void;
  id: number;
}

export interface ICard {
  id: number;
  date: number;
  title: string;
  image: string;
  weather: string;
  tags: string[];
  summary: string;
  text: string;
}

export interface IDateState {
  year: number;
  month: number;
}

export interface ICardProps {
  props: ICard;
}
