import React from "react";

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-end justify-between">
        <p className="">{skillName}</p>
        <p className="text-sm">{percentage}</p>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-200">
        <div
          style={{ width: `${percentage}` }}
          className="h-2 rounded-full bg-primary"
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;
