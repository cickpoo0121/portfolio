import React from "react";
import Typical from "react-typical";
import { Button, Image } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="card profile-detials">
      <div className="row no-gutters my-5 " style={{ maxWidth: "100%" }}>
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
                      1000,
                      "Back-end Developer",
                      1000,
                      "Front-end Developer",
                      1000,
                    ]}
                  />
                </h1>
              </span>
            </div>
            <div className="row ">
              <div className="col-1"></div>
              <div className="col-10 text-justify">
                I am a hardworking person with a great passion for coding. I
                love to learn new technologies. I am a fourth-year student in
                the major of Computer Science and Innovation from Mae Fah Luang
                University. I am looking for an position in a full-stack
                developer position or back-end developer. I wish to apply my
                experience and knowledge to make any organization that I am
                going to work with grows bigger and stronger.
                <div className="col-1"></div>
              </div>
            </div>
            <div className="text-primary mt-5">
              <strong>Education:</strong>
              <span> Mae Fah Luang University | Graduated in 2022</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mx-auto my-auto">
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
