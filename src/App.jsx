import Topbar from "./components/topside/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/manu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
const [open,setopen]= useState(false);
  return (
    <div className="app">
      <Topbar open={open} setopen={setopen}/>
      <Menu open={open} setopen={setopen}/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Testimonials/>
      <Works/>
      <Contact/>
      </div>

    </div>
  );
}

export default App;
