import { useState } from "react";
import "./css/ContactForm.css";

function ContactForm({ addPerson }) {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      id: Date.now(),
      username,
      Email,
    };

    addPerson(newPerson);

    setUsername("");
    setEmail("");
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="contact-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="contact-input"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="contact-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;