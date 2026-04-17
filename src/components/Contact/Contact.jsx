import styles from "./Contact.module.css";

function Contact() {
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
          </div>

          <form className={styles.form}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Phone</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Your phone number"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Message</span>
              <textarea
                className={styles.textarea}
                name="message"
                rows="5"
                placeholder="Tell us about your project"
              />
            </label>

            <button className={styles.button} type="submit">
              Send request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
