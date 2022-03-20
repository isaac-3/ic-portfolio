import type { NextPage } from "next";
import { useEffect } from "react";
import Navbar from "../components/navbar";

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
    </div>
  );
};

export default Home;
