import React from "react";
import avatar from "../img/Avatar-No-Background.png";
const FYP = () => {
  return (
    <div className="flex items-center gap-3 ">
      <img className="bg-none w-[20%]" src={avatar} alt="" />
      <p>
        <p className="font-bold">muhammadsurur__</p>
        <p>amsurur</p>
      </p>
      <a href="" className="text-blue-400 text-sm font-bold">
        Подписаться
      </a>
    </div>
  );
};

export default FYP;
