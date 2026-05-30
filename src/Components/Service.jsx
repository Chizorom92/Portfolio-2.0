import "../CSS/Service.css"
import "../CSS/Project.css"

const Service = () => {

  return(
  <>

  <br />
  <div className="service-main" id="serve">
    <h1 className="service-h">What i do</h1>

    <div className="service-info">
      <div className="service-inner">
        <span id="icons">💻</span> <br />
        <span>Software <br />Development</span>

      </div>

      <div className="service-inner" id="dev">
        <span id="icons">🧑‍💻</span> <br />
        <span>Web <br /> Devlopment</span>
      </div>

      <div className="service-inner">
        <span id="icons">🌐</span> <br />
        <span>Web <br />Design</span>
      </div>
    </div>

  </div>
  
  
 
  </>
  )
}

export default  Service;