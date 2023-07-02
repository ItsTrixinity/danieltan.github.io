import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/covid.svg"
import p2 from "../assets/img/dizzy-gaming.svg"
import p3 from "../assets/img/spaceinvader.svg"
import p4 from "../assets/img/stripy-cards.svg"
import p5 from "../assets/img/website.svg"
import p6 from "../assets/img/coding.svg"
import p7 from "../assets/img/Test-Design.jpg"
import p8 from "../assets/img/flat-website-prototyping.svg"
import p9 from "../assets/img/cyborg-107.svg"
import p10 from "../assets/img/configura_logo-1.svg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';



export const Projects = () => {

  const [showImage, setShowImage] = React.useState(true);

  const projects = [
    {
      title: "COVID Testing \nRegistration System",
      description: "Software Architecture, Development and Design\n❖ Java, RESTAPIs",
      imgUrl: p1,
      link: "#",
    },
    {
      title: "Design O' Souls",
      description: "Object Oriented Programming\n❖ Java, Software Design",
      imgUrl: p2,
      link: "#",
    },
    {
      title: "Space Invaders",
      description: "Functional Reactive Programming\n❖ JavaScript, TypeScript, RxJS, HTML",
      imgUrl: p3,
      link: "#",
    },
    {
      title: "Twenty-One",
      description: "Pure Functional Programming \n❖ Haskell",
      imgUrl: p4,
      link: "#",
    },
    {
      title: "Youtube and Ethics",
      description: "Blog Design and Ethics\n❖ IMXPRS",
      imgUrl: p5,
      link: "http://www.im-creator.com/free/daniffy/yt",
    },
    {
      title: "Algorithms and Data Structures",
      description: "Boyer-Moore, Ukkonen, Miller-Rabin, LZ-77\n❖ Python",
      imgUrl: p6,
      link: "#",
    },
  ];

  const personal_projects = [
    {
      title: "TrixyCraft \nMinecraft Server",
      description: "Creativity, Games Design and Exploration\n❖ Java, APIs",
      imgUrl: p7,
      link: "https://trixycraft.gq",
    },
    {
      title: "Weng Hock \nOfficial Website",
      description: "A simple website, crafted for my personal family business\n❖ HTML, CSS, JavaScript",
      imgUrl: p8,
      link: "https://wenghock.gq",
    },
    {
      title: "This Website!",
      description: "My personal portfolio website is also one of my interesting projects!\n❖ ReactJS, CSS",
      imgUrl: p9,
      link: "#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomInRight": ""} style={{whiteSpace: "pre-wrap", textAlign:'center'}}>
                <h2>Projects and Academics</h2>
                <p>Some of my personal, as well as University projects that I've worked on. <br/> My academic journey is displayed here as well!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">University Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Academic Journey</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Personal Career</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__zoomInRight" : ""}>
                    <Tab.Pane eventKey="first">
                    <p class="hover-underline-animation"><b>University Projects</b></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p class="hover-underline-animation"><b>Personal Projects</b></p>
                    <Row>
                        {
                          personal_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p class="hover-underline-animation"><b>Academic Journey</b></p>
                      <p class='bullets' style={{textAlign:"left"}}>
                      <br/>
                      <b>Year 2014 - 2018:</b> <br/>
                      ⚡ Chung Ling Butterworth High School, MY<br/>
                      <br/>
                      <b>Year 2019 - 2019:</b> <br/>
                      ⚡ Sunway College, MY<br/>
                      ⚡ Monash University Foundation Year<br/>
                      <br/>
                      <b>Year 2020 - Current:</b> <br/>
                      ⚡ Monash University, MY<br/>
                      ⚡ Bachelor of Computer Science<br/>
                      ⚡ Specialized in Advanced Computer Science<br/>
                      <br/>
                      
                      </p>
                      <p class="hover-underline-animation"><b>Academic Achievements</b></p>
                      <p class='bullets' style={{textAlign:"left"}}>
                        <br/>🏆 Receiver of Highest English Unit Achievement Award (Monash University Foundation Year)
                        <br/>🏆 Receiver of Monash High Achiever Award (Monash University Foundation Year)
                        <br/>🏆 Receiver of Monash High Achiever Award (Bachelor of Computer Science)
                        <br/>🏆 Receiver of Highest Performing Student Award in FIT1051: Programming Fundamentals In Java (Bachelor of Computer Science)
                      </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <p class="hover-underline-animation"><b>Personal Career</b></p>
                    <Row>
                      <div class="career_container">
                          <div class="career_image" 
                            onMouseEnter={() => setShowImage(false)}
                            onMouseLeave={() => setShowImage(true)}>
                              <a href="https://www.configura.com/" target="_blank"><img src={p10} style={{width: "100%", height: "100%", background: "white", overflow:"hidden", borderTopLeftRadius: 10, borderBottomRightRadius: 10, opacity: showImage ? 1 : 0.8 }}/></a>
                          </div>
                          <div class="career_text">
                            <p style={{color: "white"}}>Industry-based Learning Placement: Configura<br/>Jan 2023 - June 2023</p>
                            <br/><b>R&D Software Developer Intern</b>
                          </div>
                      </div>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
