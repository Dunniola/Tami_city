import React from "react";
import Fade from "react-reveal/Fade";

const Progressbar = ({ value }) => {
  return (
    <>
      <div>
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="75"
          className="block rounded-full bg-gray-200 overflow-x-hidden"
        >
          <Fade left>
            <span
              className="block h-3 rounded-full bg-primary"
              style={{ width: `${value}%` }}
            ></span>
          </Fade>
        </span>
      </div>
    </>
  );
};

export default Progressbar;
