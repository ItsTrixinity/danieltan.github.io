import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import face from "../assets/img/me2.jpg";
import React from 'react';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <section className="about" id="about">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <h2>About Me<br></br></h2>
          <img className="profile-img" src={face}></img>
          <p align="justify" style={{color:'black'}}>Hey there! <br/> 
          My name is <b>Daniel Tan</b> (He/Him) and thanks for stopping by my portfolio. Here's a quick FAQ!<br/>
          <br/>
          🍃 My <b>Interests</b><br/>
          Nature, Travelling, Games Design, Website Building, Exploration<br/> 
          <br/>
          🍃 My <b>Personal Traits</b><br/>
          Inquisitive, Enlightening, Inclusive, Team Player, Communicative (subjective, lol!)<br/> 
          <br/>
          🍃 Why <b>Computer Science</b><br/>
          I've been fortunate (<i>or some may say unfortunate</i>) enough to have interacted with tech when I was at a very young age
          and this sort of was the reason that sparked my curiosity in venturing towards the field of <b>Science and Technology.</b> <br/>
          <br/>
          It all started off with just a first-gen smartphone. Despite being naïve at that point of time, I just couldn't believe that
          it was nothing but a piece of glass, wrapped within a metal body, until I've found out that it's
          actually made out of both hardware and software components. Slowly maturely, I got interested in how each components are 
          interlinked to each other through software and thanks to <b>Google</b>, I've officially wrote my first "Hello World" program
          in <b>Python</b> and it sort of got me addicted to it. It soon went from a simple print statement to loops, to functions and to
          a full blown calculator program (<i>I was actually really proud of it, lol! </i>).<br/>
          <br/>
          Now here I am, exploring the field of <b>Computer Science</b> as an undergraduate student in <b>Monash University</b>. <br/>
          Despite it was and still is a pretty challenging and exhausting process, I can confidently say that I did not regret the experience and <br/>
          that I am now officially a Computer Science Graduate!<br/>
          <br/>
          🍃 Why <b>Software Development</b><br/>
          I really liked to create, regardless whether if its building software applications or even creative building in Minecraft. I absolutely love the<br/>
          adrenaline of going from an idea to a full blown product that I can fully interact and that fuels my passion for <b>Software Development</b>. <br/>It was sort of something
          that I can express my creativity and problem solving skills freely, in the domain that I am enthusiastic about, <b>Technology!</b><br/>
          Thus, my love for <b>Software Development</b> and the vision to create something impactful and meaningful for the people to use, definitely motivated me into
          getting this far and I just can't wait to see what the future holds, for me as well as the field of tech! <br/>
          <br/>
          <br/>
          That's it for now. Hopefully you got to know a bit about me!
          </p>
          
        </div>
      </Col>
    </section>
  )
}
