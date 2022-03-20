import type { NextPage } from "next";
import { useEffect } from "react";
import About from "../components/about";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

const Home: NextPage = () => {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        console.log("changed!!");
      });

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      console.log("dark");
    } else {
      console.log("light");
    }
  }, []);
  return (
    <div className="background">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
