import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};

export type headingTypes = {
  title?: string;
  desc?: string;
};
export type CategoryCardProps = {
  title?: string;
  image: string;
};

type ArticlesCardsProps = {
  image: string;
  category: string;
  date: string;
  title: string;
};
