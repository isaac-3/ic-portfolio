import React from "react";
import Image from "next/image";
import { TypeWriter } from "../lib/typewriter";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-me-name">
        <Image
          alt="profile-pic"
          src="/portrait.jpg"
          className="about-profile"
          width={150}
          height={150}
        />
        <h1>hi my name is isaac chavez and i am a . . .</h1>
        <TypeWriter
          words={["Software Developer", "Lifelong Learner", "Problem Solver"]}
        />
      </div>
      <div className="about-seperater"></div>
      <div className="about-me-read">
        <h3>
          Since I began my journey as a software engineer, I have been
          captivated by everything about it. Working with and learning new
          technologies Intrigues me and gives me new ideas and perspectives to
          various solutions. As a developer, you learn that there is more to
          programming than just coding, it&apos;s an opportunity to help and
          improve the world around us. Knowing that software development is a
          never-ending road of learning, I am excited to see what it may and
          will evolve to.
        </h3>
      </div>
    </div>
  );
};

export default About;
