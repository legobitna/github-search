import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <a href="https://github.com/legobitna/github-search" target="_blank">
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
