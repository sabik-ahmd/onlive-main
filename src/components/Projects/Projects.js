import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/sabik2.png";
import system from "../../Assets/Projects/system.png";
import job from "../../Assets/Projects/job.png";
import scrnsht from "../../Assets/Projects/scrnsht.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrnsht}
              isBlog={false}
              title="personal website"
              description="On this portfolio, you’ll find:

                            About Me – Learn more about who I am, my background, and what drives me as a developer.

                            Projects – A collection of my best work, including live demos and source code, highlighting my experience with technologies like HTML, CSS, JavaScript, React, and more.

                            Skills – A breakdown of the front-end and back-end tools I’m familiar with.

                            Contact – Ways to connect with me for collaborations, job opportunities, or freelance work."
              ghLink="https://github.com/sabik-ahmd/onlive-main.git"             
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Textutils"
              description="TextUtils is a ReactJS-based website designed for performing various operations on typed text. While basic tools like WordPad or NotePad are useful for drafting and saving text, TextUtils offers advanced features. It allows users to manipulate their text efficiently, including converting it to different cases with just a single click, making it a powerful alternative to traditional text editors. "
              ghLink="https://github.com/sabik-ahmd/textutils.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Part Time Job Portal"
              description="Part Time Job Portal is a full-stack dynamic job platform built using the React framework, aimed at connecting college students with recruiters. It enables seamless user interaction and supports efficient hiring through a robust backend architecture. The portal streamlines job searches and applications, providing an effective and user-friendly environment for both students and employers."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system}
              isBlog={false}
              title="Online Exam Proctoring System"
              description=" Developed an advanced online exam proctoring system using Django, incorporating computer vision and machinelearning to detect cheating behavior. Integrated monitoring and analytics to provide detailed reports and insights on student behavior during exams"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
