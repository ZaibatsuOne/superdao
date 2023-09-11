import {
  ILink,
  IPresentTabs,
  IWordsContact,
  IWorkWithCard,
} from "@/types/types";

import AllianceLogo from "@/public/companies/Alliance.svg";
import Circle from "@/public/companies/Circle.svg";
import Digital from "@/public/companies/Digital.svg";
import Fifty from "@/public/companies/Fifty.svg";
import Fika from "@/public/companies/Fika.svg";
import GreatOak from "@/public/companies/GreatOak.svg";
import Norwest from "@/public/companies/Norwest.svg";
import Oneblock from "@/public/companies/Oneblock.svg";
import Pear from "@/public/companies/Pear.svg";
import Protocol from "@/public/companies/Protocol.svg";
import Shima from "@/public/companies/Shima.svg";
import { StaticImageData } from "next/image";
import Ventu from "@/public/companies/Ventu.svg";
import blueStar from "@/public/stars/blue-star.svg";
import ensIcon from "@/public/Avatar.svg";
//Work with section icons
import ethIcon from "@/public/Icon_ethereum.svg";
import firstContact from "@/public/contacts/1.png";
//TABS
import firstImageTab from "@/public/Group 5560.png";
import fiveContact from "@/public/contacts/5.png";
import fiveimageTab from "@/public/original-e9a9e787a0e0a42c573ffb56ec009e80.png";
import fourContact from "@/public/contacts/4.png";
import fourImageTab from "@/public/original-ba3be2b0a4869de174cb7466145482f1.png";
import gnosisIcon from "@/public/Frame 5608.svg";
import openseaIcon from "@/public/icon_opensea.svg";
import orangeStar from "@/public/stars/orange-star.svg";
import polygonIcon from "@/public/Icon_polygon.svg";
import purpleStar from "@/public/stars/purple-star.svg";
import secondContact from "@/public/contacts/2.png";
import secondImageTab from "@/public/original-9d4b4ebbe62b1e6b1223e87d5aebe4ee.png";
import sixImageTab from "@/public/original-92402fa76e345ba7cb2586fdeb5c66c2.png";
import snapshotIcon from "@/public/Frame 2091.svg";
import thirdContact from "@/public/contacts/3.png";
import thirdImageTab from "@/public/d535a71ecf0c1f128a39bbba21a80047.jpg";
import yellowLightStar from "@/public/stars/yellowLight-star.svg";
import yellowStar from "@/public/stars/yellow-star.svg";

export const firstListCompanies: StaticImageData[] = [
  AllianceLogo,
  Digital,
  Oneblock,
  Fika,
  Pear,
  Shima,
];
export const secondListCompanies: StaticImageData[] = [
  GreatOak,
  Norwest,
  Fifty,
  Circle,
  Protocol,
  Ventu,
];
export const navbarLink: ILink[] = [
  {
    title: "Product",
    link: "#",
  },
  {
    title: "Use cases",
    link: "#",
  },
  {
    title: "Learn",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Jobs",
    link: "#",
  },
];

export const projectCategory: string[] = [
  "Investment DAO",
  "Startup DAO",
  "Service DAO",
  "Community DAO",
  "Impact DAO",
  "DeFi DAO",
  "+ More",
];

export const listWorkArea: string[] = [
  "Organisation design",
  "Smart contract development",
  "Fundraising",
  "Launch marketing",
  "Member onboarding",
  "Contributor management",
  "DAO operations",
];

export const listOFTools: IPresentTabs[] = [
  { name: "NFT membership", image: firstImageTab },
  { name: "Member directory", image: secondImageTab },
  { name: "Treasury", image: thirdImageTab },
  { name: "Feed", image: fourImageTab },
  { name: "Governance", image: fiveimageTab },
  { name: "App store", image: sixImageTab },
];

export const listWorkWith: IWorkWithCard[] = [
  {
    name: "Ethereum",
    image: ethIcon,
  },
  {
    name: "Polygon",
    image: polygonIcon,
  },
  {
    name: "Gnosis safe",
    image: gnosisIcon,
  },
  {
    name: "Snapshot",
    image: snapshotIcon,
  },
  {
    name: "ENS",
    image: ensIcon,
  },
  {
    name: "OpenSea",
    image: openseaIcon,
  },
];

export const listContacts: StaticImageData[] = [
  firstContact,
  secondContact,
  thirdContact,
  fourContact,
  fiveContact,
];

export const listWordsOfContacts: IWordsContact[] = [
  {
    word: "Success managers",
    image: blueStar,
  },
  {
    word: "Knowledge base",
    image: purpleStar,
  },
  {
    word: "Chat support",
    image: yellowStar,
  },
  {
    word: "Tutorials",
    image: yellowLightStar,
  },
  {
    word: "Templates",
  },
  {
    word: "Smart Contract development",
    image: orangeStar,
  },
  {
    word: "Events",
  },
  {
    word: "Education",
    image: yellowLightStar,
  },
  {
    word: "Guides",
  },
];
