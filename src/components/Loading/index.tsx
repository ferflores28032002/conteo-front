import React from "react";

import { Hourglass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Hourglass
        visible={true}
        height={50}
        width={50}
        ariaLabel="hourglass-loading"
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loading;
