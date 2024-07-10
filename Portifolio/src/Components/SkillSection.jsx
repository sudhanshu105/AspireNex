import React from 'react'
import mongo from '../skill_pic/mongo.png';
import gcp from '../skill_pic/gcp.png';
import aws from '../skill_pic/aws.png';
const SkillSection = () => {
  return (
    <div><h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
        <p>JavaScript</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
        <p>React</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
        <p>Node.js</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" />
        <p>Python</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C" />
        <p>C</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
        <p>CSS</p>
      </div>
      <div className="skill-item">
        <img src="https://img.icons8.com/color/48/000000/database.png" alt="SQL" />
        <p>SQL</p>
      </div>
      <div className="skill-item">
        <img src={mongo} alt="Mongo" />
        <p>Mongo DB</p>
      </div>
      <div className="skill-item">
        <img src={gcp} alt="GCP" />
        <p>GCP</p>
      </div>
      <div className="skill-item">
        <img src={aws} alt="AWS" />
        <p>AWS</p>
      </div>
    </div>
    <div className="coursework">
      <h3>Coursework</h3>
      <ul>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Operating Systems</li>
        <li>Database Management Systems</li>
        <li>Software Engineering</li>
        <li>Computer Networks</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Big Data</li>
      </ul>
    </div>
    </div>
  )
}

export default SkillSection