import React from "react";

export default function Detail(props) {
  var expreience = [
    {
      projectName: "Accenture Internship Trainee",
      duration: "present",
      tasks: [
        "Tested a web application",
        "POC sending an email with Gmail, Hotmail, SendGrid and AWS SES hosting in Golang programing language",
      ],
      role: "Back-end Developer",
      platform: "web application",
    },

    {
      projectName: "Submit Senior Project",
      duration: "2020 - present",
      tasks: [
        "Gathered requirements from client",
        "Designed database (Analyze and review requirements to Designed database)",
        "Developed back-end (Create API services and funtions )",
      ],
      role: "Back-end Developer",
      platform: "web application",
    },

    {
      projectName: "ElderEat (my senior project)",
      duration: "2021",
      tasks: [
        "Designed database (Designed database)",
        "Designed UX/UI",
        "Developed front-end",
        "Developed back-end (Create API services and funtions )",
        "Line Notify (Create a LINE notification API function)",
        "Training Model (Training a model with image classification)",
      ],
      role: "Full-stack Developer",
      platform: "mobile application",
    },

    {
      projectName: "Treasury of Thailand",
      duration: "2021",
      tasks: ["Developed front-end (Developed form)"],
      role: "Front-end Developer",
      platform: "mobile application",
    },

    {
      projectName: "IT Asset",
      duration: "2021",
      tasks: [
        "Gathered requirements from client ",
        "Designed database (Designed database)",
        "Developed front-end (Create web pages)",
        "Developed back-end (Create API services and funtions )",
        "Mobile application (Fixed bugs and integrated front-end to back-end)",
      ],
      role: "Full-stack Developer",
      platform: "web application",
    },
  ];

  var skills = [
    {
      title: "Web and Mobile",
      ability: [
        "Flutter",
        "NodeJS",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "VueJS",
        "ReactJS",
      ],
    },
    {
      title: "Programming Language",
      ability: ["JavaScript", "Dart", "Java", "Python", "Golang"],
    },
    {
      title: "Tools",
      ability: [
        "Figma",
        "Adobe PhotoShop",
        "Adobe Xd",
        "Microsoft Office",
        "Git",
        "Xampp",
        "Jupyter Notebook",
        "Source Tree",
        "Workbench",
      ],
    },
  ];

  return (
    <div
      data-spy="scroll"
      data-target="#resume-content"
      data-offset="0"
      data-bs-offset="0"
      style={{ maxHeight: "500px", minHeight: "500px", overflowY: "auto" }}
      className="mt-4"
    >
      {props.active === "educate" && (
        <div>
          <h4>Education</h4>
          <ul>
            <div>
              <strong className="text-primary">Mae Fah Luang University</strong>
              <span className="text-primary"> | Graduate in 2022 </span>
            </div>
            <span>
              Bachelor of Science program in Computer Science and Innovation,
              GPAX 3.59
            </span>
          </ul>
        </div>
      )}

      {props.active === "work" && (
        <div id="work">
          <h4>Work Experience</h4>
          <ul>
            {expreience.map((project, index) => (
              <div key={`project${index}`} className="mb-3">
                <strong className="text-primary">{project.projectName}</strong>
                <span className="text-primary"> | {project.duration} </span>
                <div>
                  <strong>{`Role: ${project.role}`}</strong>
                </div>
                <ul>
                  {project.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                {index !== expreience.length - 1 && <hr />}
              </div>
            ))}
          </ul>
        </div>
      )}

      {props.active === "skills" && (
        <div id="skills">
          <h4>Programming Skills</h4>
          <div className="row mt-3">
            {skills.map((skill, index) => (
              <div key={`skill${index}`} className="col-4">
                <strong style={{ fontSize: "clamp(1rem, 1vw, 5rem)" }}>
                  {skill.title}
                </strong>
                <ul className="mt-1">
                  {skill.ability.map((el, index) => (
                    <li
                      key={`ability${index}`}
                      className="text-primary"
                      style={{ fontSize: "clamp(1rem, 0.5vw, 5rem)" }}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* {props.active === "like" && (
        <div id="like">
          <h4>@like</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )} */}
    </div>
  );
}
