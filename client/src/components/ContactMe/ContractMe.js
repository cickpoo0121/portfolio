import React, { useState } from "react";

export default function ContractMe() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // console.log(form.checkValidity());
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // } else {
    // }
    // setValidated(true);
    event.preventDefault();
  };

  return (
    <div className="topic-title my-3 ">
      <h2 className="mb-3">Contact Me</h2>
      <div className="container card">
        <div className="row my-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <span className=" text-center" style={{ fontSize: "24px" }}>
              If you’d like to chat about a project or just have question,
              please fill in the form below. I aim to get back within 2 days.
            </span>

            <form className="my-5" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">
                    <span>Name</span>
                    <strong className="text-danger"> *</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Name"
                    required
                  ></input>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">
                    <span>Email</span>
                    <strong className="text-danger"> *</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Email"
                    required
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom03">
                    <span>Subject</span>
                    <strong className="text-danger"> *</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    placeholder="Subject"
                    required
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom04">
                    <span>Message</span>
                    <strong className="text-danger"> *</strong>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="validationCustom04"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>

              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
