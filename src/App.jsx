import React from "react";
import bgImg from "./assets/brown-wooden-flooring.jpg";
import MyBook from "./components/MyBook";
import Background from "./Background";

const App = () => {


  return (
    <>
      <Background />
      <div className="flex justify-center w-full h-full mt-56 sm:mt-10 md:mt-10 lg:mt-10 ">
        <MyBook />
      </div>
    </>
  );
};

export default App;
