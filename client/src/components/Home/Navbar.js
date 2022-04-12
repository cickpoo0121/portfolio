import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setactive] = useState("navHome");

  return (
    <nav
      id="navbar-example2"
      className="container navbar navbar-light"
      style={{ backgroundColor: false ? "#e3f2fd" : "#ffffff" }}
    >
      <a className="navbar-brand" href="/">
        <h1>{"chumphon aekwarodom".toUpperCase()}</h1>
        <div>Eamil: chumphon.aekwarodom@gmail.com</div>
        {/* <div>Phone: 0871563385</div> */}
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="/"
            className={
              active === "navHome"
                ? "nav-link font-weight-bold text-primary h5"
                : "nav-link"
            }
            onClick={() => setactive("navHome")}
          >
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume-content"
            className={
              active === "navResume"
                ? "nav-link font-weight-bold text-primary h5"
                : "nav-link"
            }
            onClick={() => setactive("navResume")}
          >
            <span>Experience</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a
            href="#contactMe-content"
            className={
              active === "navContact"
                ? "nav-link font-weight-bold text-primary h5"
                : "nav-link"
            }
            onClick={() => setactive("navContact")}
          >
            <span>Contact me</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a
            href="#interests-content"
            className={
              active === "navContact"
                ? "nav-link font-weight-bold text-primary h5"
                : "nav-link"
            }
            onClick={() => setactive("navContact")}
          >
            <span>Interests</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
