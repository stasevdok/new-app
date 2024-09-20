import Navbar from "../components/Navbar";
import React from "react";

export default function Search() {
  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
