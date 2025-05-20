import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/text.png";
import system from "../../Assets/Projects/system.png";
import job from "../../Assets/Projects/job.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Textutils"
              description="TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. "
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Part Time Job Portal"
              description="Developed a full stack dynamic job platform for college students and recruiters using React Framework . Ensured seamless user interaction and efficient hiring processes through a well-designed backend architecture"
              
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
