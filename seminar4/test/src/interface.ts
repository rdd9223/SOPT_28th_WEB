import React from "react";
import { RouteComponentProps } from "react-router-dom";
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
  onClickFunc: () => void;
}

export interface IMatchParams {
  id: string;
}

export interface ICardHeaderProps extends RouteComponentProps<IMatchParams> {
  title: string;
  isReadOnly: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleEdit: () => void;
}

export interface ICardInfoProps {
  data: ICard;
  isReadOnly: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}
