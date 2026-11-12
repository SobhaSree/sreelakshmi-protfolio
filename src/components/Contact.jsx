import { useState } from "react";
import { FiAlertCircle, FiSend } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(values) {
  const nextErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) {
    nextErrors.name = "Please enter your name.";
  } else if (name.length < 2) {
    nextErrors.name = "Name should be at least 2 characters.";
  }

  if (!email) {
    nextErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    nextErrors.subject = "Please enter a subject.";
  }

  if (!message) {
    nextErrors.message = "Please enter a message.";
  } else if (message.length < 10) {
    nextErrors.message = "Message should be at least 10 characters.";
  }

  return nextErrors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      setNotice("");
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Frontend demonstration only: nothing is sent to a server or saved.
    setForm(initialForm);
    setNotice(
      "This form is a frontend demonstration. Your message was checked in the browser only and was not sent or stored."
    );
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">06 — Contact</p>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <form className="card contact-form" onSubmit={handleSubmit} noValidate>
            <p className="demo-banner">
              <FiAlertCircle aria-hidden="true" />
              <span>
                This form is a frontend demonstration. Messages are not sent or
                stored.
              </span>
            </p>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="field-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="field-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject ? (
                <p id="subject-error" className="field-error">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="field-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend aria-hidden="true" />
              Submit
            </button>

            {notice ? (
              <p className="form-message form-message-success" role="status">
                {notice}
              </p>
            ) : null}
          </form>

          <aside className="card contact-aside">
            <p className="eyebrow">Profiles</p>
            <h3>Find me online</h3>
            <p>
              GitHub, LinkedIn, and email links are ready for you to add. Until
              a link is saved, selecting it explains where to update it.
            </p>
            <SocialLinks
              items={["github", "linkedin", "email"]}
              className="contact-social"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
