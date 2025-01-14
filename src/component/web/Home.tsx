import Footer from "../layout/Footer";
import TopNav from "../layout/TopNav";
import React from "react";
import Contact from "../sections/Contact";
import Place from "../sections/Place";
import Service from "../sections/Service";
import About from "../sections/About";
import Starter from "../sections/Starter";

const Home: React.FC = () => {
  return (
    <div className="hero_area">
        <TopNav />
        <Starter />
        <About />
        <Service />
        <Place/>
        <Contact/>
        <Footer />
    </div>
    );
}
export default Home;