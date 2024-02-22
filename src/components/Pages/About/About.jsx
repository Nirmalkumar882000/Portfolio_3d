import React from "react";
import Heading from "../services/Heading";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const About = () => {
  return (
    <div className="h-full p-10 bg-white page-shadow sm:ml-16 sm:p-5 ">
      <Heading
        title="About"
        subtitle="Loream ipsum dolor sit amet loream ipsum dolor sit amet"
      />

      {/* Details Section */}
      <p className="mt-10 font-bold text-slate-500 sm:mt-5 sm:ml-8">
        Front-End Developer with a passion for creating clean, intuitive, and
        visually appealing web interfaces. Proficient in HTML, CSS, and
        React.js.
        A detail-oriented professional committed to delivering
        responsive and engaging user experiences. Collaborative team player
        dedicated to continuous learning and innovation in front-end
        development.
      </p>
      {""}

      {/* Social Links */}

      <div className="flex mt-10 space-x-4 sm:ml-16">
        <a href="">
        <MdFacebook className="social-btn"  />
        </a>
        <a href="https://www.instagram.com/crazy_rahul_2000/?igsh=b3ZyZjJrOGM5dTQ5">
        <AiFillInstagram className="social-btn"  />
        </a>
        <a href="https://github.com/Nirmalkumar882000">
        <AiFillGithub className="social-btn" />
        </a>
        <a href="">
        <AiFillLinkedin className="social-btn" />
        </a>
      </div>
      {/* Button Click */}
      <div className="flex mt-4 space-x-4 sm:ml-14">
        <a href="#" download className="primary-btn">
          Download Resume
        </a>
        <a href="#" className="outline-btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default About;
