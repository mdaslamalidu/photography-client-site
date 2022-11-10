import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
    </div>
  );
};

export default Spinner;
