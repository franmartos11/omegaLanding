"use client";

import React from "react";
import useDeviceType from "./detect";
import WorkProcess from "./WorkProcesss";


const WorkProcessWrapper = () => {
  //const isMobile = useDeviceType();

  return (
    <div>
      {/*isMobile ? <WorkProcess /> : <WorkProcess /> */}
      <WorkProcess></WorkProcess>
    </div>
  );
};

export default WorkProcessWrapper;

