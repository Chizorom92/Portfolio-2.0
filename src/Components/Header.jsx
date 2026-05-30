import myDp from "/src/assets/dp-ai.png";
import "../CSS/Header.css";
import benCv from "../assets/ben-cv.pdf"

const Header = () => {
  const imgDetails = `Benjamin's Photo`; 

  


  return (
    <>
    <main className="header-main">
      <div className="header-intro">
        <span className="header-name">Hi, I am  <br />Benjamin Chizorom</span>
        <small className="header-skill">Frontend Developer</small>

        <span className="header-btn">
         <a href={benCv} download="ben-cv.pdf"> <button id="cv">Download my CV / Resume</button>  </a>

          
            
           <a href="https://github.com/Chizorom92" target="_blank" rel="noopener noreferrer">
              <button id="learn">Learn More</button>
            </a>

            
        </span>
      </div>

      
        <img src={myDp} alt={imgDetails} width='25%' id="img" />
      
    </main>
    
    
    </>
  )
}


export default Header;