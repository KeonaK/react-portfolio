import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../App.scss";

function Contact() {
  return (
    <div>
      <Header />
      <section className="contact" id="contact_section">
        <h2>Contact Me</h2>
        <p>
          Hello again! Thank you for taking the time to vist my website. Feel
          free to reach out to me if you would like to work together or just
          connect. I look forward to hearing from you!{" "}
        </p>
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
