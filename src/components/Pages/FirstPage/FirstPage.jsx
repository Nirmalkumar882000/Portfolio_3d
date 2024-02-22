import React from "react";
import personalImg from "../../../assets/person2.webp";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
        <div className="p-10 space-y-3">
          {/* image container */}
          <div className="">
            <img src={personalImg} alt="image" className="w-[200px] mx-auto sm:ml-36 border-4 border-orange-500 rounded-xl" />
          </div>
          {/* text container */}
          <div className="">
            <div className="space-y-3 sm:ml-16">
              <p className="font-bold uppercase ">Hello</p>
              <p className="text-5xl font-bold sm:text-4xl md:text-5xl text-black/80">
                I'am Nirmlkumar M {" "}
              </p>
              <p className="text-2xl font-bold text-left text-black/75">Full Stack Developer </p>
              <p className="text-lg font-bold text-black/75">
                Knowledge of modern web technologies such as React.Js, Node Js ,Express Js ,Mongo DB,
                JavaScript, and HTML/CSS.
              </p>
              <a
                className="inline-block primary-btn"
                href="mailto:cmnirmalkumar2000@gmail.com"
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
