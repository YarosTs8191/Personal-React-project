import { useState } from "react";
import styles from "./Contact.module.css";

const initialErrors = {
  name: "",
  phone: "",
  message: "",
};

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const validateForm = (formData) => {
    const newErrors = {
      name: "",
      phone: "",
      message: "",
    };

    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const message = formData.get("message").trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+\d\s()-]{7,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const newErrors = validateForm(formData);

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((value) => value !== "");

    if (hasErrors) {
      setIsSubmitted(false);
      return;
    }

    form.reset();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.label}>Contact us</p>

            <h2 className={styles.title}>
              Let’s talk about your outdoor space
            </h2>

            <p className={styles.text}>
              Get in touch to discuss your project, ask a question, or request a
              quote for landscaping services.
            </p>

            {isSubmitted && (
              <p className={styles.successMessage}>
                ✅ Thank you! We will contact you within 24 hours.
              </p>
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className={styles.errorMessage}>
                  {errors.name}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Phone</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Your phone number"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className={styles.errorMessage}>
                  {errors.phone}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Message</span>
              <textarea
                className={styles.textarea}
                name="message"
                rows="5"
                placeholder="Tell us about your project"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className={styles.errorMessage}>
                  {errors.message}
                </span>
              )}
            </label>

            <button className={styles.button} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
