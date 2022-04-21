import React from "react";

export default function Interests() {
  var interests = [
    { title: "Basketball", img: "basketball.jpg", desc: "" },
    { title: "Movie", img: "watch.jpg", desc: "" },
    { title: "Music", img: "listen.jpg", desc: "" },
  ];
  return (
    <div>
      <h2 className="topic-title my-3 mb-3">Interests</h2>

      <div className="row">
        {interests.map((interest, index) => (
          <div key={index} className="col-md-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">{interest.title}</h5>
                {/* <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p> */}
                {/* <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
              <img
                className="card-img-top"
                src={`/images/${interest.img}`}
                alt="Card image cap"
                style={{ maxHeight: "550px" }}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
