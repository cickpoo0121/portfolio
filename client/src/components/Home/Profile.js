import React from "react";
import Typical from "react-typical";
import { Image } from "react-bootstrap";

export default function Profile() {
  function handelGetResume() {
    window.open("/images/resume.pdf");
  }
  return (
    <div className="card profile-detials">
      <div className="row no-gutters my-5 ">
        <div className="col-md-8">
          <div className="card-body text-center">
            <h4 className="text-dark">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Chumphon Aekwarodom</span>
            </h4>
            <div className="my-5  ">
              {" "}
              <span className="text-primary">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full-stack Developer",
                      1500,
                      "Back-end Developer",
                      1500,
                      "Front-end Developer",
                      1500,
                    ]}
                  />
                </h1>
              </span>
            </div>
            <div className="row ">
              <div className="col-1"></div>
              <div className="col-10 text-justify">
                I am a hard-working person with a great passion for coding. I
                love to learn about new technologies. I am a fourth-year student
                in the major of Computer Science and Innovation at Mae Fah Luang
                University and will graduate in 2022. I am looking for a
                position as a full-stack developer or backend developer. I wish
                to apply my experience and knowledge to make the organization
                that I work with grow bigger and stronger.
                <div className="col-1"></div>
              </div>
            </div>
            <div className="text-primary mt-5 mb-3">
              <strong>Education:</strong>
              <span> Mae Fah Luang University | Graduated in 2022</span>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handelGetResume}
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto my-auto text-center">
          <Image
            src="/images/TeE.jpg"
            className=" card-img "
            style={{
              backgroundColor: "black",
              maxWidth: "80%",
              height: "80%",
              borderRadius: "100%",
              // width: "300px",
              // height: "300px",
            }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
