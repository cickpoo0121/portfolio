import React, { useState } from "react";
import Detail from "./Detail";

export default function Resume() {
  const [active, setactive] = useState("work");

  return (
    <div>
      <h2 className="topic-title my-3 mb-3">Experience</h2>
      <div className="card" style={{ minWidth: "100%" }}>
        <div className="row">
          <div className="col-md-3">
            <div
              className="d-flex flex-column shadow-sm bg-white rounded"
              style={{ height: "100%" }}
            >
              <ul
                className="nav nav-pills flex-column"
                style={{ fontSize: "18px" }}
              >
                {/* <li>
                  <a
                    // href="#"
                    className={
                      active === "educate"
                        ? "nav-link active"
                        : "nav-link text-dark"
                    }
                    onClick={() => setactive("educate")}
                  >
                    <label>
                      <i className="bi bi-mortarboard-fill pe-4"></i>
                      Education
                    </label>
                  </a>
                </li> */}
                <li>
                  <a
                    // href="#"
                    className={
                      active === "work"
                        ? "nav-link active"
                        : "nav-link text-dark"
                    }
                    onClick={() => setactive("work")}
                  >
                    <label>
                      <i className="bi bi-file-earmark-spreadsheet-fill  pe-4"></i>
                      Wrok Experience
                    </label>
                  </a>
                </li>
                <li>
                  <a
                    // href="#"
                    className={
                      active === "skills"
                        ? "nav-link active"
                        : "nav-link text-dark"
                    }
                    onClick={() => setactive("skills")}
                  >
                    <label>
                      <i className="bi bi-terminal-fill pe-4"></i> Programming
                      Skills
                    </label>
                  </a>
                </li>
                {/* <li>
                  <a
                    // href="#like"
                    className={
                      active === "like"
                        ? "nav-link active"
                        : "nav-link text-dark"
                    }
                    onClick={() => setactive("like")}
                  >
                    <i className="bi bi-palette-fill mr-3"></i> Interests
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* <div className="col-md-1">
            <div className="d-flex" style={{ height: "100%" }}>
              <div className="vr"></div>
            </div>
          </div> */}
          <div className="col-md-9">
            <Detail active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
