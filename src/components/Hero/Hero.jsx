import './Hero.css'
import profile_white_circle from '../../assets/profile_white_circle.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react'

export default function Hero() {

  const [text, setText] = useState("My resume");

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Heidi_Ahlgren_cv.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer'
    link.click();
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_white_circle} alt="profile picture" />
      <h1>I'm Heidi Ahlgren,<span> software development student</span> from Espoo</h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div
          className="hero-resume"
          onMouseOver={() => setText("Download PDF")}
          onMouseLeave={() => setText("My resume")}
          onClick={handleDownload}
        >
          {text}
        </div>
      </div>
    </div>
  )
}


