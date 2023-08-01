import "./works.scss"

export default function Works() {
  return (
    <div className="works" id="works">
      
      <div id="skills" className="container skills-container ">

          <div className="skill-container-left text">
            <h2 className="skill-heading">
              <span className="caps">M</span>y  Skills   
            </h2>

            <div className="skill-subHeading">
                    <div className="first">
                        <h2>My cretive skills and experience</h2>
                        <h3>Here are some of my skills that I have developed till now</h3>
                    </div>
                    <div className="second">
                          <h1>Web Technologies:-</h1>
                          <br></br>
                          <h2>HTML</h2>
                          <br></br>
                          <h2>CSS</h2>
                          <br></br>
                          <h2>Javascript</h2>
                          <br></br>
                          <h2>React.js</h2>
                    </div>
            </div>
          </div>

          <div className="skill-container-right">
            <img src="assets/HTML.png" alt="" class="skills-logo" />
            <img src="assets/CSS.png" alt="" class="skills-logo" />
            <img src="assets/Javascript.svg" alt="" class="skills-logo" />
            <img src="assets/React.png" alt="" class="skills-logo" />
            {/* <img src="assets/NodeJs.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Next.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Redux.svg" alt="" class="skills-logo" /> */}
            <img src="assets/Tailwind.png" alt="" class="skills-logo" />
            {/* <img src="assets/Bootstrap.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/MaterialUI.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Express.png" alt="" class="skills-logo" /> */}
            <img src="assets/Git.svg" alt="" class="skills-logo" />
            <img src="assets/Github.svg" alt="" class="skills-logo" />
            {/* <img src="assets/Graphql.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/MongoDB.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Vercel.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/ChartJs.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Bash.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/Docker.svg" alt="" class="skills-logo" /> */}
            {/* <img src="assets/K8s.svg" alt="" class="skills-logo" /> */}
          </div>
        </div>

     </div>
  )
}