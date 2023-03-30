import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import Typed from "react-typed";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
        <GooeyCircleLoader {...loaderProps} />
        <Typed
          className="loader-text"
          strings={["Loading..."]}
          typeSpeed={60}
          backSpeed={0}
        />
    </div>
  );
}

export default Loader;