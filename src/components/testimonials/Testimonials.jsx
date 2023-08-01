import "./testimonials.scss"

export default function testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      
      <div id="about" className="about-container container">

          <div className="about-container-left text">
            <h2 className="about-heading">
              <span className="caps">A</span>bout Me
            </h2>

            <div className="about-subHeading">
              <p>
              Hello everyone, I am Ishita Karmakar, a 3rd Year ME Undergrad at NIT Agartala. 
              I am an aspiring software engineer and a programming enthusiast.
              </p>
              <p>
              I am interested in CP,DSA, and Development and look forward to work in these domains in future 
              as well as learn new skills and implement my existing skills.
              </p>
              <p>
              I am open to work and collaboration opportunities.
              </p>
            </div>
          </div>

          <div className="about-container-right">
                <img className="about" src="assets/Me1.jpg"></img>
          </div>
        </div>

     </div>
  )
}

