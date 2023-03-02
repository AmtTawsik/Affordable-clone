import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Media/Logo.png";

const Header = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{ backgroundColor: "#182d3c" }}
      className="font-sansSerif sticky top-0 bg-headerBG px-20 rounded-none"
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className="mr-3 h-[60px] p-0" alt="Flowbite Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="">
        <Navbar.Link href="#Projects">
          <span className="text-white text-xl hover:text-gray-300">
            Our Mission
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Benefits">
          <span className="text-white text-xl hover:text-gray-300">
            About Us
          </span>
        </Navbar.Link>
        <Navbar.Link href="#What">
          <span className="text-white text-xl hover:text-gray-300">
            Donate
          </span>
        </Navbar.Link>
        <Navbar.Link href="#How">
          <span className="text-white text-xl hover:text-gray-300">
            Our Programs
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Contact">
          <span className="text-white text-xl hover:text-gray-300">
            Our Partners
          </span>
        </Navbar.Link>
        <Navbar.Link href="#Blogs">
          <span className="text-white text-xl hover:text-gray-300">
            Service
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
