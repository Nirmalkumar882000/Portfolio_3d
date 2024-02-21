import React from "react";
import personalImg from "../../../assets/person2.jpg";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
        <div className="p-10 space-y-3">
          {/* image container */}
          <div className="">
            <img src={personalImg} alt="image" className="w-[300px] mx-auto" />
          </div>
          {/* text container */}
          <div className="">
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-5xl font-bold md:text-5xl text-black/80">
                I'am Nirmlkumar M {" "}
              </p>
              <p className="text-left text-black/75">Full Stack Developer </p>
              <p className="text-black/75">
                Knowledge of modern web technologies such as React.js,
                JavaScript, and HTML/CSS.
              </p>
              <a
                className="inline-block primary-btn"
                href="cmnirmalkumar2000@gmail.com"
              >
                {""}
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
