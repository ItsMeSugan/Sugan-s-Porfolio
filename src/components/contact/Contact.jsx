import { useState } from "react";
import "./contact.scss";

function Contact({ setMenuOpen }) {
  const [Message, setMessageUpdate] = useState(false);
  const [Email, setEmail] = useState("");
  const [Textarea, setTextarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageUpdate(true);
    setEmail("");
    setTextarea("");
  };

  return (
    <div className="contact" id="contact" onClick={() => setMenuOpen(false)}>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email.com"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            value={Textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>

          {!Message ? (
            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
          ) : (
            <span>Thank's, I'll get back to you ASAP ;)</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
