import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./Pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Skills from "./Pages/Skills/Skills"
import Services from "./Pages/services/Services";
import About from "./Pages/About/About";
import Project from "./Pages/Projects/Project";


import ProjectImg1 from "../assets/projects/car-rental.jpg";
import ProjectImg2 from "../assets/projects/restaurant.jpg";
import ProjectImg3 from "../assets/projects/ecommerce.jpg";
import ProjectImg4 from "../assets/projects/travel-website.jpg";



const ProjectData = [
  {
    name: "Car Rental website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg1,
    previewLink: "https://car-rental-tcj.netlify.app/",
  },
  {
    name: "Restaurant website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg2,
    previewLink: "https://foodies-zone.netlify.app/",
  },
];


const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg3,
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
  {
    name: "Travel website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg4,
    previewLink: "https://travel-tcj.netlify.app/",
  },
];



const MyBook = () => {
  return (
    <HTMLFlipBook width={600} height={700} className="" showCover="true">
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
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
};

export default MyBook;
