import './skills.css'
import skills_Data from '../../assets/skills_data'

export default function Skills() {

  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>My skills</h1>
        <hr />
      </div>
      <div className="skills-container">
        {skills_Data.map((skill, index) => {
          return <div key={index} className='skills-format'>
            <h3>{skill.s_no}</h3>
            <h2>{skill.s_name}</h2>
          </div>
        })}
      </div>
    </div>
  )
}


