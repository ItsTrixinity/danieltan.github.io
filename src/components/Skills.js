import python from "../assets/img/python3.svg";
import java from "../assets/img/java2.svg";
import oracle from "../assets/img/sql.svg";
import javascript from "../assets/img/js2.svg";
import ms from "../assets/img/ms.svg";
import algo from "../assets/img/algo.svg";
import r from "../assets/img/rstudio.svg";
import haskell from "../assets/img/haskell.png";
import dv from "../assets/img/data-visualization.svg";
import dm from "../assets/img/dm.svg";
import cloud from "../assets/img/cloud.svg";
import api from "../assets/img/api.svg";
import sdev from "../assets/img/software-dev.svg";
import sdesign from "../assets/img/software-design.svg";
import ds from "../assets/img/data-science.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import cLogo from "../assets/img/c-.png"
import deepLearning from "../assets/img/deep-learning.png"
import parallel from "../assets/img/versatile.gif"
import combochart from "../assets/img/analytics.png"
import React from 'react';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [showImage, setShowImage] = React.useState(true);

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills and Technology</h2>
                        <p>A list of skillsets and tech that I am comfortable with.<br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item" 
                            onMouseEnter={() => setShowImage(false)}
                            onMouseLeave={() => setShowImage(true)}>
                                <img src={python} alt="Image" style={{ opacity: showImage ? 1 : 0.8 }}/>
                                <h5>Python <br/>(Proficient)</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java <br/>(Proficient)</h5>
                            </div>
                            <div className="item">
                                <img src={oracle} alt="Image" />
                                <h5>Oracle SQL&nbsp;&nbsp;</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript / TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={ms} alt="Image" />
                                <h5>Microsoft Suite</h5>
                            </div>
                            <div className="item">
                                <img src={algo} alt="Image" />
                                <h5>Algorithms and <br/> Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={r} alt="Image" />
                                <h5>R Programming Language</h5>
                            </div>
                            <div className="item">
                                <img src={haskell} alt="Image" />
                                <h5>Haskell</h5>
                            </div>
                            <div className="item">
                                <img src={dv} alt="Image" />
                                <h5>Data Analytics and <br/>Visualization</h5>
                            </div>
                            <div className="item">
                                <img src={dm} alt="Image" />
                                <h5>Data Modelling</h5>
                            </div>
                            <div className="item">
                                <img src={cloud} alt="Image" />
                                <h5>Cloud Computing <br/>(Basic)</h5>
                            </div>
                            <div className="item">
                                <img src={api} alt="Image" />
                                <h5>Application Programming Interface <br/> REST APIs</h5>
                            </div>
                            <div className="item">
                                <img src={sdev} alt="Image" />
                                <h5>Software Development <br/>Object-Oriented Programming</h5>
                            </div>
                            <div className="item">
                                <img src={sdesign} alt="Image" />
                                <h5>Software Design <br/></h5>
                            </div>
                            <div className="item">
                                <img src={ds} alt="Image" />
                                <h5>Data Science <br/></h5>
                            </div>
                            <div className="item">
                                <img src={cLogo} alt="Image" />
                                <h5>C++ <br/></h5>
                            </div>
                            <div className="item">
                                <img src={deepLearning} alt="Image" />
                                <h5>Deep Learning <br/></h5>
                            </div>
                            <div className="item">
                                <img src={parallel} alt="Image" />
                                <h5>Parellel Computing <br/> (POSIX / MPI)</h5>
                            </div>
                            <div className="item">
                                <img src={combochart} alt="Image" />
                                <h5>Statistical Analysis</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
