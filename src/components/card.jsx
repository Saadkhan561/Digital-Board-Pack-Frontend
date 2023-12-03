import React from "react";

const Card = () => {
  return (
    <div className="w-[170px] mob_screen:w-[130px] card_div_sm:w-screen border border-slate-400 rounded-2xl cursor-pointer hover:scale-105 duration-100">
      <div>
        <img className="object-contain" src="/images/word.png" alt="" />
      </div>
      <div className="p-2">
        <div className="font-semibold text-md">Sales in January</div>
        <div className="text-gray-600 text-xs">Owner Name</div>
        <div className="text-gray-600 text-xs">Added on - 03/09/23</div>
      </div>
    </div>
  );
};

export default Card;
