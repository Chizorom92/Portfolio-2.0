import "../CSS/Skill.css"

const Skills = () => {
  return (
    <>
      <h1>My Skills</h1>
      <div className="skills-main">
        
        <div className="skill-info">
          <span id="value">85%</span> <br />
          <span id="skillName">HTML</span>
        </div>

        <div className="skills-info">
          <span id="value">90%</span> <br />
          <span id="skillName">CSS</span>
        </div>

        <div className="skill-info">
          <span id="value">50%</span> <br />
          <span id="skillName">JAVASCRIPT</span>
        </div>

        <div className="skill-info">
          <span id="value">30%</span> <br />
          <span id="skillName">REACT</span>
        </div>

        <div className="skill-info">
          <span id="value">70%</span> <br />
          <span id="skillName">GIT</span>
        </div>

        <div className="skill-info">
          <span id="value">50%</span> <br />
          <span id="skillName">SQL</span>
        </div>
        
        <div className="skill-info">
          <span id="value">60%</span> <br />
          <span id="skillName">Tailwind Css</span>
        </div>

        <div className="skill-info">
          <span id="value">10%</span> <br />
          <span id="skillName">JAVA</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
