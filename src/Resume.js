import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import ProgressBar from "./components/ProgressBar";

const skills = [
  {
    title: "HTML",
    percent: 100,
  },
  {
    title: "CSS",
    percent: 90,
  },
  {
    title: "Reactjs",
    percent: 90,
  },
  {
    title: "Nextjs",
    percent: 80,
  },
  {
    title: "React Native",
    percent: 94,
  },
  {
    title: "Flutter",
    percent: 65,
  },
  {
    title: "Tailwind css",
    percent: 70,
  },
  {
    title: "Styled-components",
    percent: 90,
  },
  {
    title: "Nodejs",
    percent: 70,
  },
  {
    title: "Mongodb",
    percent: 70,
  },
  {
    title: "Graphql",
    percent: 90,
  },
  {
    title: "Firebase",
    percent: 85,
  },
];
const education = [
  {
    title: "ATSIT School",
    subtitle: "computer science & Networking || Ismailia || Egypt ",
    description:
      "Advanced Technical School For Information Technology Ismailia City",
    date: "(2000-2005)",
    icon: "ti-crown",
  },
  {
    title: "Zagazig University",
    subtitle: "Engineering preparation | Sharqya",
    description: "Disconntinue faculty of Engineering zagazig universty",
    date: "(2006-2007)",
    icon: "ti-ruler-alt-2",
  },
  {
    title: "ASU Holloway",
    subtitle: "Commerce Bachelor Degree || Cairo || Egypt",
    description: "faculty of commerce Ain Shams University",
    date: "(2008-2017)",
    icon: "ti-cup",
  },
];
const experience = [
  {
    title: "MERN stack developer",
    subtitle: "UpWork INC | Remote",
    description:
      "Responsible for writing reusable, testable, and efficient code and developing and designing front end web applications. charge of applying CSS methodologies and tools into creating complete websites.",
    date: "(2018-2022)",
    icon: "ti-pencil-alt",
  },
  {
    title: "Front-End Developer",
    subtitle: "Upwork INC & Fiverr | Remote",
    description: "",
    date: "(2016-2018)",
    icon: "ti-heart",
  },
  {
    title: "Back-End Developer",
    subtitle: "Freelance Upwork INC | Remote",
    description:
      "Nodejs javascript building APIS and components connected to Mongodb database .",
    date: "(2016-2018)",
    icon: "ti-paint-bucket",
  },
];

function Resume() {
  return (
    <section className="section section-resume section-resume-1">
      <div className="display-spacing">
        <header className="el-heading el-heading-center">
          <div className="el-icon">
            <h2 className="el-icon-title">
              <span>RESUME</span>
            </h2>
          </div>
          <h3>Education & Experience</h3>
          <div className="divider divider-1-reverse divider-1-1"></div>
          <div className="divider divider-1-reverse divider-1-2"></div>
        </header>
        <Container className="mb-spacing">
          <Row>
            <Col md={6}>
              <div className="resume-row">
                <h4 className="resume-title">Education</h4>
                <ul>
                  {education.map((item, index) => (
                    <li key={index}>
                      <div className="resume-item">
                        <div className="resume-head">
                          <div className="el-icon">
                            <span
                              className={`el-icon-icon ${item.icon}`}
                            ></span>
                          </div>
                          <h5>{item.title}</h5>
                          <h6>{item.subtitle}</h6>
                        </div>
                        <div className="resume-body">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="resume-row">
                <h4 className="resume-title">Experience</h4>
                <ul>
                  {experience.map((item, index) => (
                    <li key={index}>
                      <div className="resume-item">
                        <div className="resume-head">
                          <div className="el-icon">
                            <span
                              className={`el-icon-icon ${item.icon}`}
                            ></span>
                          </div>
                          <h5>{item.title}</h5>
                          <h6>
                            {item.subtitle} <small>{item.date}</small>
                          </h6>
                        </div>
                        <div className="resume-body">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {skills.map((item, index) => (
              <Col key={index} sm={6} xl={4}>
                <div className="skills-item">
                  <ProgressBar label={item.title} percent={item.percent} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Resume;
