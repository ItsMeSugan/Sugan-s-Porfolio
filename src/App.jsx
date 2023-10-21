import Contact from "./components/contact/Contact";
import Intro from "./components/into/Intro";
import Testimonial from "./components/testimonials/Testimonial";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
