import React from "react";
import NavbarReturn from "../components/NavbarReturn.jsx";
import { Link } from "react-router-dom";

export default function projectCleanup() {
  return (
    <div>
      <NavbarReturn />
      <Link to="/">
        <h3 className="pt-96">Home</h3>
      </Link>
    </div>
  );
}
