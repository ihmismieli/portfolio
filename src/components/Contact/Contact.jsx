import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccc33ebf-04cd-4510-bd62-5034891dcc6e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      //tee tähän snackbar
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <hr />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <p>I'm available for new projects and looking for a summer job as a developer where I could continue part-time alongside my studies in the fall. Feel free to send me a message, and let's discuss further!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" /> <p>heidiahlgren@hotmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" /> <p>+358 44 2008 298</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" /> <p>Espoo, Finland</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

