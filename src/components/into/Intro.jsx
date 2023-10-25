/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro({ setMenuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        '" React JS " ',
        ' "Tailwind CSS " ',
        ' "Bootstrap" ',
        ' "Javascript" ',
      ],
    });
    // console.log(textRef.current);
  }, []);

  return (
    <div className="intro" id="intro" onClick={() => setMenuOpen(false)}>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Profile picture" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sugan T</h1>
          <h3>
            Front End Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
