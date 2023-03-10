import React, { useRef } from "react";
import "./Contact.css";
import { BiEnvelope } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = e.target;
    emailjs
      .sendForm(
        "service_3htzbvd",
        "template_cz8glds",
        form.current,
        "IQtAN0xcg7gyAlwx6"
      )
      .then(
        (result) => {
          if (result.text) {
            contactForm.reset();
            toast.success("Message sent", {
              style: {
                border: "1px solid #26537C",
                backgroundColor: "#14233B",
                padding: "16px",
                color: "#ffffff",
              },
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="contact_options"
        >
          <article className="contact_option">
            <BiEnvelope className="contact_icon" />
            <h4>Email</h4>
            <h5>codersadhin@gmail.com</h5>
            <a
              href="mailto:codersadhin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Akkas Ali</h5>
            <a
              href="https://m.me/ali.akkas.sadhin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>01580667199</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801580667199"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          data-aos="fade-up"
          data-aos-duration="1500"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="btn btn-primary send-message">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
