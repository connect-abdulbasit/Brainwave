import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./component/Button";
import Header from "./component/Header";
import Sections from "./component/Sections";
import { Hero } from "./component/Hero";
import Benefits from "./component/Benefits";
import Collaboration from "./component/Collaboration";
import Services from "./component/Services";
import Roadmap from "./component/Roadmap";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
