"use client";

import React from "react";

import WorkProcessV2 from "./WorkProcessV2";
import useDeviceType from "./detect";
import WorkProcess from "./WorkProcesss";


const WorkProcessWrapper = () => {
  const isMobile = useDeviceType();

  return (
    <div>
      {isMobile ? <WorkProcessV2 /> : <WorkProcess />}
    </div>
  );
};

export default WorkProcessWrapper;

