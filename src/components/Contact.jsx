import { useState } from "react";
import "./contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mgojybzv";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jpatience549@gmail.com");
      setCopyStatus("Copied!");
      window.setTimeout(() => setCopyStatus(""), 2000);
    } catch {
      setCopyStatus("Unable to copy");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      const data = await response.json();
      const errorMessage = data.errors
        ? data.errors.map((error) => error.message).join(" ")
        : "Something went wrong. Please try again.";
      setStatus(errorMessage);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <span className="section-tag">
          CONTACT
        </span>

        <div className="contact-container">

          <div className="contact-info">

            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:jpatience549@gmail.com">jpatience549@gmail.com</a>
              </p>
              <button type="button" className="copy-email-button" onClick={handleCopyEmail}>
                Copy email
              </button>
              {copyStatus && <span className="copy-status" role="status">{copyStatus}</span>}
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Nigeria · West Africa Time (UTC+1)</p>
            </div>

            <div className="info-card">
              <h3>Availability</h3>
              <p>Available for internships, junior engineering roles, and product opportunities.</p>
            </div>

            <div className="info-card">
              <h3>Profiles</h3>
              <p>
                <a className="profile-link" href="https://github.com/patience9090" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {" · "}
                <a className="profile-link" href="https://linkedin.com/in/patience-joseph-a24900324" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

            {status === "SUCCESS" && (
              <p className="form-status form-success">
                Thank you! Your message has been sent.
              </p>
            )}

            {status && status !== "SUCCESS" && (
              <p className="form-status form-error">{status}</p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;