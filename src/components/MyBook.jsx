import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./Pages/Cover/Cover";
import coverImg from "../assets/cover.webp";
import EndImg from "../assets/last-page.webp";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Skills from "./Pages/Skills/Skills"
import Services from "./Pages/services/Services";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";


import ProjectImg1 from "../assets/projects/Car_Rental.webp";
import ProjectImg2 from "../assets/projects/Dream_Travel.webp";
import ProjectImg3 from "../assets/projects/Ecommerce.webp";
import ProjectImg4 from "../assets/projects/r3f_monster_world.webp";

import ProjectImg5 from "../assets/projects/FruitWheel.webp";
import ProjectImg6 from "../assets/projects/CandyWheel.webp";
import ProjectImg7 from "../assets/projects/carwheel.webp";
import ProjectImg8 from "../assets/projects/Text-Effect_3d.webp";



const ProjectData = [
  {
    name: "Car Rental website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg1,
    previewLink: "https://github.com/Nirmalkumar882000/Car_Rental_frondend",
  },
  {
    name: "Dream_Travel",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg2,
    previewLink: "https://github.com/Nirmalkumar882000/Dream_Travels_Page",
  },
];


const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg3,
    previewLink: "https://github.com/Nirmalkumar882000/React_Ecommerce",
  },
  {
    name: "R3f_monster_world",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg4,
    previewLink: "https://github.com/Nirmalkumar882000/Monster_3d",
  },
];

const ProjectData3 = [
  {
    name: "FruitWheel",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg5,
    previewLink: "https://github.com/Nirmalkumar882000/Spin_Wheel_Game",
  },
  {
    name: "CandyWheel",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg6,
    previewLink: "https://github.com/Nirmalkumar882000/Spin_Wheel_Game",
  },
];

const ProjectData4 = [
  {
    name: "CarWheel",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg7,
    previewLink: "https://github.com/Nirmalkumar882000/Spin_Wheel_Game",
  },
  {
    name: "R3F_Text_Effect",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg8,
    previewLink: "https://github.com/Nirmalkumar882000/3d_Text_Effect",
  },
];



const MyBook = () => {
  return (
    <HTMLFlipBook width={500} height={600} className="" showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="Portfolio"/>
      </Page>
      <Page number={2}>
       <FirstPage/>
      </Page>
      <Page number={3}>
        <Skills/>
      </Page>
      <Page number={4}>
        <Services/>
      </Page>
      <Page number={5}>
        <About/>
      </Page>
      <Page number={6}>
        <Project ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Project ProjectData={ProjectData2}  />
      </Page>
       <Page number={8}>
        <Project ProjectData={ProjectData3}  />
      </Page>
      <Page number={9}>
        <Project ProjectData={ProjectData4}  />
      </Page>
      <Page number={10}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
};

export default MyBook;
