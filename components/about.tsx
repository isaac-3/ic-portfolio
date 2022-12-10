import React, { useEffect } from "react";
import Image from "next/image";
import { typeWriter } from "../lib/typewriter";

const About = () => {
  useEffect(() => {
    const initTypeWriter = () => {
      const txtElement = document.querySelector(".type-writer");
      new typeWriter(txtElement, [
        "Software Developer",
        "Lifelong Learner",
        "Problem Solver",
      ]);
    };
    initTypeWriter();
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="about-me-name">
        <Image
          alt="profile-pic"
          src="/croppro.jpg"
          className="about-profile"
          width={120}
          height={150}
        />
        <h1>hi my name is isaac chavez and i am a . . .</h1>
        <span className="type-writer"></span>
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
