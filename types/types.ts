import { StaticImageData } from "next/image";

export interface ILink {
  title: string;
  link: string;
}

export interface IPresentTabs {
  name: string;
  image: StaticImageData;
}

export interface IWorkWithCard {
  name: string;
  image: StaticImageData;
}

export interface IWordsContact {
  word: string;
  image?: StaticImageData | null | undefined;
}

export interface IBlogPreview {
  id: number;
  logo: StaticImageData;
  title: string;
  desc: string;
}
