import React, { useState } from "react";
import "../styles/contact.css"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    if (!name || !email || !message) { // Verificar si los campos requeridos están vacíos
      setFormError("Por favor complete todos los campos requeridos.");
    } else {
      // Aca envio los datos del formulario a un servidor
      console.log("Enviando datos del formulario:", name, email, message);
      setFormError("");
      // Restablecer los valores de los campos del formulario
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="input"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="input"
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        {formError && <div className="form-error">{formError}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
