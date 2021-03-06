import React from "react";

function Contact() {
  return (
    <div className="contact-wrap">
      <h3>Kontaktformular</h3>
      <form action="https://formsubmit.co/stud.cook.dhbw@gmail.com" className="contact-form" method="POST">
        <input type="hidden" name="_next" value={window.location.href.replace('contact', 'emailSent')}></input>
        <div className="input-block" >
          <input placeholder="Vorname" type="text" className="form-control" required name="name" />
        </div>
        <div className="input-block">
          <input placeholder="Nachname" type="text" className="form-control" required name="name" />
        </div>
        <div className="input-block">
          <input placeholder="E-Mail" type="email" className="form-control" required name="email" />
        </div>
        <div className="input-block">
          <input placeholder="Betreff" type="text" className="form-control" required name="issue" />
        </div>
        <div className="input-block textarea textAreaZIdex">
          <textarea placeholder="Ihre Nachricht" rows="3" type="text" className="form-control" required name="message"></textarea>
        </div>
        <button className="square-button submitContact" type="submit" id="submit-button">Senden</button>
      </form>
    </div>
  );
}

export default Contact;