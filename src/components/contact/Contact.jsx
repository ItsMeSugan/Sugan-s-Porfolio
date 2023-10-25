import { useState } from "react";
import "./contact.scss";

function Contact({ setMenuOpen }) {
  const [Message, setMessageUpdate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageUpdate(true);
  };

  return (
    <div className="contact" id="contact" onClick={() => setMenuOpen(false)}>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email.com" />
          <textarea name="" id="" placeholder="Message"></textarea>
          {!Message ? (
            <button type="submit">Send</button>
          ) : (
            <span>Thank's, I'll get back to you ASAP ;)</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
