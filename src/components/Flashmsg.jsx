import React from "react";

const Flashmsg = (props) => {
  return (
    <div className="w-full bg-green-500 text-white text-center p-4 mb-4 rounded-md">
      {props.message}
    </div>
  );
};

export default Flashmsg;