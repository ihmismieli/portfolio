import { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export default function NavBar() {

  const [menu, setMenu] = useState("home");
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef();

  const sections = ["home", "about", "skills", "work", "contact"];

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); //update active section
        }
      });
    }, { threshold: 0.1 }); // ensures that 50% is to be seen

    // add observes to all sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-100vw";
  }


  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt="menu open icon" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="menu close icon" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {activeSection === "home" && <hr />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {activeSection === "about" && <hr />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {activeSection === "skills" && <hr />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {activeSection === "work" && <hr />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {activeSection === "contact" && <hr />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}
