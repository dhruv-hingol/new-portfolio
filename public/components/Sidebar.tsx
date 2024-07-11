"use client";
import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="h-full relative">
      <div className="absolute right-[-20px] bottom-[-25.375rem] cursor-pointer rotate-90 sidebar-toggle-icon">
        <FaGreaterThan />
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default Sidebar;
