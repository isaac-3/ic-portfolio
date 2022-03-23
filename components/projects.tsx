import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="project-header">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-slides-container">
        <ProjectCard
          imgSrc="/digitaldiner.png"
          projectTitle="The Digital Diner"
          projectDescription="Search recipes by name and category, like and save recipes you enjoy, and create your own recipes to share with the world!"
          codeLink="https://github.com/isaac-3/food-app"
          tools={["MONGODB", "EXPRESS", "REACT/REDUX", "NODEJS"]}
          apis="TheMealDB"
        />
        <ProjectCard
          imgSrc="/weatherapp.png"
          projectTitle="Weather App"
          projectDescription="Check current weather in your area or lookup up weather in a differnt city! Toggle between celsius and fahrenheit"
          codeLink="https://github.com/isaac-3/weatherapp-react-native"
          tools={["REACT NATIVE"]}
          apis="OpenWeatherApi"
        />
        <ProjectCard
          imgSrc="/chatter.png"
          projectTitle="Chatter"
          projectDescription="Users are able to search and join/leave rooms, create rooms, view members/online, send/edit/delete messages"
          realtime
          codeLink="https://github.com/isaac-3/chat-app"
          tools={["MONGODB", "EXPRESS", "REACT", "NODEJS"]}
        />
        <ProjectCard
          imgSrc="/bestpics.png"
          projectTitle="BEST PICS"
          projectDescription="App where users are able to share their favorite pics, follow/unfollow friends, leave comments and edit their profile!"
          codeLink="https://github.com/isaac-3/nodeproject"
          tools={["MONGODB", "EXPRESS", "REACT", "NODEJS"]}
        />
        <ProjectCard
          imgSrc="/takeatrip.png"
          projectTitle="Take A Trip"
          projectDescription="Users are able to plan trips out by searching for various things to do around their location, and may also add other users to join in on the trip to plan out more ideas"
          codeLink="https://github.com/isaac-3/final-project"
          demoLink="https://www.youtube.com/watch?v=adlCActjmRc&feature=youtu.be"
          tools={["REACT", "REDUX", "RAILS"]}
          apis="TripadviserApi WeatherApi"
        />
        <ProjectCard
          imgSrc="/shoptastic.png"
          projectTitle="Shoptastic"
          projectDescription="E-commerce website where users can search by categories for various items and be able to purchase them, edit their cart and view store locations"
          codeLink="https://github.com/isaac-3/Shop-Mod4-React-Project"
          demoLink="https://www.youtube.com/watch?v=QG8HfCflFWM&feature=youtu.be"
          tools={["REACT", "RAILS"]}
          apis="TargetApi GoogleApi"
        />
        <ProjectCard
          imgSrc="/chrello.png"
          projectTitle="Chrello"
          projectDescription="A To-Do app where users can make an agenda and be able to plan out their days by creating and/or finishing tasks"
          codeLink="https://github.com/bryantomoregie/Project-3-"
          demoLink="https://www.youtube.com/watch?v=jqrZRoTbMS8"
          tools={["VANILLA JS", "RAILS", "CSS/HTML"]}
        />
      </div>
    </div>
  );
};

export default Projects;
