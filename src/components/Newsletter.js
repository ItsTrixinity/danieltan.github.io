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
          🍃 My <b>Interests?</b><br/>
          Nature, Travelling, Games Design, Website Building, Exploration<br/> 
          <br/>
          🍃 My <b>Personal Traits?</b><br/>
          Inquisive, Enlightening, Inclusive, Team Player, Communicative<br/> 
          <br/>
          🍃 Why <b>Computer Science?</b><br/>
          I've been fortunate (<i>or some may say unfortunate</i>) enough to have interacted with tech when I was at a very young age
          and this sort of was the reason that sparked my curiosity in venturing towards the field of <b>Science and Technology.</b> <br/>
          <br/>
          It all started off with just a first-gen smartphone. I must admit that I was naïve at that point of time, where
          I used to think that it was nothing but a piece of glass, wrapped within a metal body, until I've found out that it's
          actually made out of both hardware and software components. Slowly maturely, I got interested in how each components are 
          interlinked to each other through software and thanks to <b>Google</b>, I've officially wrote my first "Hello World" program
          in <b>Python</b> and it sort of got me addicted to it. It soon went from a simple print statement to loops, to functions and to
          a full blown calculator program (<i>I was actually really proud of it, lol! </i>).<br/>
          <br/>
          Now here I am, exploring the field of <b>Computer Science</b> as an undergraduate student in <b>Monash University</b>. <br/>
          Despite it was and still is a pretty challenging and exhausting process, I can confidently say that I did not regret the experience. <br/>
          <br/>
          🍃 Why <b>Software Development / Games Design? </b><br/>
          Back then, there's this game called <b>Minecraft</b> that I would basically play for endless hours and days. For those that do not know what's <b>Minecraft</b>,
          it's basically a sandbox game where you get to play as a character named <b>Steve</b>, where the main goal of the game is to survive but at the same time, allows you to express your creativity by
          building what you would call your own world (something that I really enjoyed). When servers were introduced, my friends and I would team up and play together as a bunch, which was seriously some good old 
          memories. That was when I realized that <b>Minecraft</b> allows you to go beyond by extending their base game further, by customizing your own servers through plugins. <b>Minecraft</b> itself was completely built in Java and
          they were kind enough to allow developers to design plugins that allow you to bend the rules of the game, craft your own story and build your own unique servers.<br/>
          <br/>
          Since I was already interested in <b>Software Development</b> from the start, and to be able to combine it with the game that I like the most, it definitely was a dream come true. From a game that I used
          to play when I was a kid, to a game that I now develop plugins for in my personal server, named <b>TrixyCraft</b>. It truly was a fascinating process and I enjoyed every single bit of it.
          This is sort of the passion that got me wanting more and thus, engaging in <b>Software Development</b>! Unfortunately <b>Games Design</b> isn't a thing here in my University but I've kept it as a hobby where I could
          express my creativity towards all the games that made my childhood more interesting and fun.
          <br/>
          <br/>
          That's it for now. Hopefully you got to know a bit about me!
          </p>
          
        </div>
      </Col>
    </section>
  )
}
