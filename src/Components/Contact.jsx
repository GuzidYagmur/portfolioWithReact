

function Contact() {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form action={"https://getform.io/f/bqokqrrb"} method="POST">
          <div className="input-group">
            <div className="input-box">
              <input type="text"name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="number" name="number" placeholder="Phone Number" required />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
          </div>

          <div className="input-group-2">
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" name="message" value="Send Message" className="btn" />
          </div>
        </form>
      </section>
  );
}
export default Contact;