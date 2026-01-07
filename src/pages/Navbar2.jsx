import React from "react";
import { Link } from "react-router-dom";




const Navbar2 = () => {
  
  return (
     <nav className="flex items-center justify-between px-10 py-4 bg-emerald-950 text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Anjali</h1>

      {/* Menu */}
      <ul className="flex gap-8 text-lg">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar2;