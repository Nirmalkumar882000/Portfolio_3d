import React from "react";
import Heading from "../services/Heading";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const About = () => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      <Heading
        title="About"
        subtitle="Loream ipsum dolor sit amet loream ipsum dolor sit amet"
      />

      {/* Details Section */}
      <p className="mt-10 text-slate-500">
        Front-End Developer with a passion for creating clean, intuitive, and
        visually appealing web interfaces. Proficient in HTML, CSS, and
        React.js. A detail-oriented professional committed to delivering
        responsive and engaging user experiences. Collaborative team player
        dedicated to continuous learning and innovation in front-end
        development.
      </p>{""}

      {/* Social Links */}

      <div className="flex mt-10 space-x-4">
      <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
      </div>
      {/* Button Click */}
      <div className="flex mt-4 space-x-4">
        <a href="#" className="primary-btn">
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
