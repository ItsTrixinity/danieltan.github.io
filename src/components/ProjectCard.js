import { Col } from "react-bootstrap";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleClick = (e) => {
  e.preventDefault();
  toast(
    <div>
    🐊 Unfortunately, this project is unavailable for public viewing due to 
    <span style={{ fontWeight: "bold", color: "#fff" }}> Monash University</span> regulations.
    </div>, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'TEST',
    theme: 'dark',
    });
};

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  if(link=="#"){
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
        <a href={link} onClick={handleClick} target="_blank" rel="noreferrer noopener">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          </a>
        </div>
      </Col>
    )
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}
