
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/Contact.css";


const SERVICE_ID  = "service_meu4buw";   // e.g. "service_abc123"
const TEMPLATE_ID = "template_3s0poug"; // e.g. "template_xyz789"
const PUBLIC_KEY  = "l3JXakprdkz9LZna1";  // e.g. "aBcDeFgHiJkLmNoP"


const Contact = () => {
  const formRef = useRef(null);
  const maxNum  = 11;
  const minNum  = 8;

  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();         // stop page reload
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current.reset(); // clear fields after success
      })
      .catch(() => {
        setStatus("error");
      });
  };

  //  Success screen 
  if (status === "sent") {
    return (
      <div className="contact" id="contact">
        <div className="confirmation-message">
          <span className="confirmation-icon">✉️</span>
          <h2>Message sent!</h2>
          <p>Thanks for reaching out — I'll get back to you shortly.</p>
          <button onClick={() => setStatus("idle")}>Send another message</button>
        </div>
      </div>
    );
  }

  //  Main form 
  return (
    <div className="contact" id="contact">
      <h2>Get in touch</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-input">
          <div className="input-flex">
            {/* name="..." must match the variable names in your EmailJS template */}
            <input type="text"  name="from_name"   placeholder="Name" id="name"     required />
            <input type="text"  name="last_name"   placeholder="Last Name" id="lastName"    required />
          </div>

          <div className="input-flex">
            <input type="email" name="to_email"    placeholder="Email" id="to_email"       required />
            <input type="tel"   name="phone"       placeholder="Phone Number" id="num"
                   minLength={minNum} maxLength={maxNum}              required />
          </div>
        </div>
        <br className="bg-" />

        <textarea name="message" cols={120} rows={8} placeholder="Message" id="message" required />
        <br />

        {status === "error" && (
          <p className="error-message">
            Something went wrong — please try again or email me directly.
          </p>
        )}

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit now"}
        </button>
        
      </form>

    
    </div>
  );
};

export default Contact;