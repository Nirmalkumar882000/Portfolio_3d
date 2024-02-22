import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full bg-white page-shadow">
      <div className="">
        {/* Heading */}
        <div className="">
          <div className="relative">
            <div className="text-6xl font-bold text-center xl:text-8xl text-black/5">
              SKILLS
            </div>
            <h1 className="absolute text-3xl -translate-y-1/2 top-1/2 left-1/2 md:text-4xl">
              Skills
            </h1>
          </div>
        </div>

        {/* Skills section */}
        <div className="space-y-6 sm:space-y-2 xl:space-y-3">
          <SkillsLevel skillName="HTML" percentage={"90%"} />
          <SkillsLevel skillName="CSS" percentage={"90%"} />
          <SkillsLevel skillName="JavaScript" percentage={"88%"} />
          <SkillsLevel skillName="React js" percentage={"80%"} />
          <SkillsLevel skillName="Express Js" percentage={"50%"} />
          <SkillsLevel skillName="Node js" percentage={"50%"} />
          <SkillsLevel skillName="Mongo DataBase" percentage={"90%"} />
          <SkillsLevel skillName="Tailwind CSS" percentage={"85%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
