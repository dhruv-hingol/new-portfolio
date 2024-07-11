"use client";
import React, { useState } from "react";
import { LuX } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-full p-12 flex justify-end"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cursor-pointer p-2 rounded-full">
        {isOpen ? (
          <LuX size={25} color="#475157" />
        ) : (
          <FaGripLines size={25} color="#475157" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
