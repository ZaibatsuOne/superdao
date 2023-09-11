import { ILink, IPresentTabs, IWorkWithCard } from "@/types/types";

import ensIcon from "@/public/Avatar.svg";
//Work with section icons
import ethIcon from "@/public/Icon_ethereum.svg";
//TABS
import firstImageTab from "@/public/Group 5560.png";
import fiveimageTab from "@/public/original-e9a9e787a0e0a42c573ffb56ec009e80.png";
import fourImageTab from "@/public/original-ba3be2b0a4869de174cb7466145482f1.png";
import gnosisIcon from "@/public/Frame 5608.svg";
import openseaIcon from "@/public/icon_opensea.svg";
import polygonIcon from "@/public/Icon_polygon.svg";
import secondImageTab from "@/public/original-9d4b4ebbe62b1e6b1223e87d5aebe4ee.png";
import sixImageTab from "@/public/original-92402fa76e345ba7cb2586fdeb5c66c2.png";
import snapshotIcon from "@/public/Frame 2091.svg";
import thirdImageTab from "@/public/d535a71ecf0c1f128a39bbba21a80047.jpg";

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
