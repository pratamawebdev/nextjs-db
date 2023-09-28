import React from "react";

const Time = ({ data }) => {
  return (
    <div>
      <p className="font-sans text-base text-black">{data.name}</p>
    </div>
  );
};

export default Time;
