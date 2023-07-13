import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {

      e.preventDefault();

    emailjs.sendForm('service_r63kpwl', 'template_evfnlls', form.current, 'dhp-Pfr1GRXQwmFGH')
      .then((result) => {
          console.log(result.text)
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact">
    <div className="maps">
    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Goldennigor%20,41.27028788485112,%20%20%2069.26320562642283+(Goldenigor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
   {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.656851840751!2d69.27420173671584!3d41.32160547241487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b34353d430d%3A0x3512027741c5a434!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQpNC40L3QsNC90YHQvtCy0YvQuSDQmNC90YHRgtC40YLRg9GC!5e0!3m2!1sru!2s!4v1542043026122" title="TASHKENT INSTITUTE OF FINANCE" width="100%" height="650" frameborder="0" allowfullscreen=""></iframe>  */}
    </div>
     <div className="asosiy">
      {/* <div id="map-container" style={{ width: '100%', height: '95vh' }} /> */}
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <input type="text" name="user_name" placeholder="Username" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <input type="tel" name="user_phone" placeholder="Phone Number" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <input type="submit" value="Send" onSubmit={sendEmail} />
      </form>
    </div>
    </div>
    );
};

export default Contact;
