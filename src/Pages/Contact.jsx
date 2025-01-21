import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

import dimaPhoto from "../imgs/dimaPhoto.jpeg";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_3sty40l",
        "template_n5tmioo",
        form.current,
        "oI-GImzplxpwyUN-B"
      )
      .then((result) => {
        setStatus({
          type: "success",
          message: "Mensagem enviada com sucesso!",
        });
        form.current.reset();
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: "Erro ao enviar mensagem. Tente novamente.",
        });
      })
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <div className="contact-container">
      <div className="img-container">
        <h1 className="text1">DON'T BE SHY</h1>
        <img
          src={dimaPhoto}
          alt="imagem de um cachorro fofo"
          className="photo"
        />
        <h1 className="text2">SAY HI</h1>
      </div>
      <div className="form-area">
        <div className="email-form">
          <h2>Gostou do meu portfólio? Deixe sua mensagem!</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Seu email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua mensagem"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </button>
            {status && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="social-links">
            <div className="links-wrapper">
              <a
                href="https://www.linkedin.com/in/oelinton"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ioelinton"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://wa.me/555497029318"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
