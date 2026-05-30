import "../CSS/About.css";
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <>
      <div className="About-main" id="abt">
        <div className="About-info">
          <h1 className="About-head">About</h1>

          <p className="About-p">
            I am a digital craftsman with an eye for the details that most
            people scroll past. Based in Lagos,I builds web experiences that
            sit somewhere between functional and beautiful the kind that make
            users pause and wonder who made this. When am not translating
            design ideas into clean, precise code, am somewhere deep in a
            rabbit hole of new frameworks, refining his craft one project at a
            time. I believes that good software isn't just written, it's
            considered. Quietly ambitious. Deliberately creative. Always
            building.
          </p>
        </div>

        <div className="About-contact">
          <div className="myInfo">
            <span>
              <i class="fa-solid fa-address-card"></i>
            </span>
            <span id="title">FullName</span>
            <span>Maurice Benjamin Chizorom</span>
          </div>

          <div className="myInfo">
            <span > <a href="https://github.com/Chizorom92"> <FaGithub className="" /> </a> </span>
            <span id="title">Github</span>
            <span>
              <a href="https://github.com/Chizorom92">Chizorom92</a>
            </span>
          </div>

          <div className="myInfo">
            <span>
             <a href="https://x.com/Benjaminmbabie" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-x"></i>
              </a>
            </span>
            <span id="title">X/Twitter</span>
            <span>
              <a href="https://x.com/Benjaminmbabie" target="_blank" rel="noopener noreferrer">
                benjaminmbabie
              </a>
            </span>
          </div>

          <div className="myInfo">
            <span ><a href="tel:+2348028682900"> <i class="fa-solid fa-phone"></i></a></span>
            <span id="title">Phone</span>
            <span>
              <a href="tel:+2348028682900">(+234) 8028682900</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
