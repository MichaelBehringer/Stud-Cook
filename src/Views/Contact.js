import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (/*
    <div>
      <div className="card cardMain">
        <h1>Kontakt</h1>
        <div id="contact-form" class="clearfix">
        <form action="https://formsubmit.co/paulbrilmayer@gmail.com" method="POST" >
        <p> 
        <label for="name">Name: <span class="required">*</span></label>
        <p><input type="text" id="name" name="name" placeholder="Max Mustermann" required="required" autofocus="autofocus" /></p> 
        </p>
        <p>
        <label for="email">E-Mail: <span class="required">*</span></label>
        <p><input type="email" id="email" name="email" placeholder="max@mustermail.de" required="required" /></p> 
        </p> 
        <p>
        <label for="telefon">Telefon: </label>
        <p><input type="tel" id="telefon" name="telefon" placeholder="+49123456789"/> </p> 
        </p> 
        <p>
        <label for="message">Nachricht: <span class="required">*</span></label>
        <p><textarea id="message" name="message" placeholder="Ihre Nachricht muss mindestens 10 Zeichen enthalten" required="required" data-minlength="10"></textarea></p> 
        </p> 
        <button className="colorThemeButton marginTopButtonTemp" input type="reset">Zurücksetzen</button>
        <button className="colorThemeButton marginTopButtonTemp" input type="submit" value="Senden" id="submit-button" >Senden</button>
        <p id="req-field-desc"><span class="required">*</span> benötigte Felder</p>*/
 
<section class="contact-wrap">
  <form action="" class="contact-form">
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Vorname</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Nachname</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">E-Mail</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Betreff</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block textarea">
        <label for="">Schreiben Sie hier Ihre Nachricht</label>
        <textarea rows="3" type="text" class="form-control"></textarea>
      </div>
    </div>
    <div class="col-sm-12">
      <button class="square-button">Senden</button>
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
