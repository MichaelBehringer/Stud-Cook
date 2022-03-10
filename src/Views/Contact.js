import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (/*
    <div>
      <div className="card cardMain">
        <h1>Kontakt</h1>
        <div id="contact-form" className="clearfix">
        <form action="https://formsubmit.co/paulbrilmayer@gmail.com" method="POST" >
        <p> 
        <label for="name">Name: <span className="required">*</span></label>
        <p><input type="text" id="name" name="name" placeholder="Max Mustermann" required="required" autofocus="autofocus" /></p> 
        </p>
        <p>
        <label for="email">E-Mail: <span className="required">*</span></label>
        <p><input type="email" id="email" name="email" placeholder="max@mustermail.de" required="required" /></p> 
        </p> 
        <p>
        <label for="telefon">Telefon: </label>
        <p><input type="tel" id="telefon" name="telefon" placeholder="+49123456789"/> </p> 
        </p> 
        <p>
        <label for="message">Nachricht: <span className="required">*</span></label>
        <p><textarea id="message" name="message" placeholder="Ihre Nachricht muss mindestens 10 Zeichen enthalten" required="required" data-minlength="10"></textarea></p> 
        </p> 
        <button className="colorThemeButton marginTopButtonTemp" input type="reset">Zurücksetzen</button>
        <button className="colorThemeButton marginTopButtonTemp" input type="submit" value="Senden" id="submit-button" >Senden</button>
        <p id="req-field-desc"><span className="required">*</span> benötigte Felder</p>*/
 
<section className="contact-wrap">
<h3>Kontaktformular</h3>
  <form action="https://formsubmit.co/stud.cook.dhbw@gmail.com" className="contact-form" method="POST">
  <input type="hidden" name="_next" value="https://ai.tillh.de/~gruppe4ai21/#/emailSent"></input>
    <div className="col-sm-6">
      <div className="input-block">
        <input placeholder="Vorname" type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="input-block">
        <input placeholder="Nachname" type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <input placeholder="E-Mail" type="email" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block">
        <input placeholder="Betreff" type="text" className="form-control"/>
      </div>
    </div>
    <div className="col-sm-12">
      <div className="input-block textarea">
        <textarea placeholder="Ihre Nachricht" rows="3" type="text" className="form-control"></textarea>
      </div>
    </div>
    <div className="col-sm-12">
      <button className="square-button" type="submit" id="submit-button">Senden</button>
    </div>
  </form>
</section>

/*
        </form>
        </div>
      </div>
    </div>*/
  );
  
}

export default Contact;