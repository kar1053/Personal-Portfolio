import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef(0);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Student", "Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="left">
              <div className="imgcontainer">
                <img src="assets/Me2.jpg"/>
              </div>
        </div>
        <div className="right">
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Ishita Karmakar</h1>
              <h3>
                I'm a <span ref={textRef}></span>
              </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png"></img>
          </a>
        </div>
    </div>
  );
}
