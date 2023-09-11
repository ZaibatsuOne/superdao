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
