import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-32">
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Spinner;
