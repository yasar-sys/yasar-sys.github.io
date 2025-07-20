import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}!`);
    setFormData({name:"", email:"", message:""});
  }

  return (
    <main className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
