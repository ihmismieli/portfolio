import './Footer.css'
import github_logo from '../../assets/github_logo.svg'
import linked_in from '../../assets/linked_in.svg'

export default function Footer() {

    return (
        <div className='footer'>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"></p>
                <div className="footer-bottom-right">
                    <a href="https://github.com/ihmismieli" target='_blank' rel="noopener noreferrer">
                        <img src={github_logo} alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/heidi-ahlgren-6b75a8104/" target='_blank' rel="noopener noreferrer">
                        <img src={linked_in} alt="linked in logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
