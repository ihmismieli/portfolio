import './About.css'
import about_img from '../../assets/about_img.png'

export default function About() {

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <hr />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_img} alt="picture of me" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate second-year Software Development student at Haaga-Helia University of Applied Sciences. My focus is on building modern web applications by combining both frontend and backend development, with the goal of becoming a top full-stack developer who can create efficient, user-friendly solutions from start to finish.</p>
                        <p>I enjoy working with frameworks such as React and Spring Boot, and I'm excited to explore and learn new tools in frontend and backend development. In the future, I hope to work for a company that values the well-being and development of its employees. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
