import React from "react";
import "./Whatwedo.css";
import Zoom from 'react-reveal/Zoom';

import wrapper1 from "../../assets/wrapper1-min.webp";

const WhatWeDo = () => {
  return (
    <>
      <div className="wrapper1 ">
        <div className="wrapper-content container">
          


          <Zoom duration={2000}>
            <div className="wrapper-content-left">
              <img src={wrapper1} alt="nurse" loading="lazy" />
            </div>
          </Zoom>

            <div className="wrapper-content-right">
              <h1>COMING SOON</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
