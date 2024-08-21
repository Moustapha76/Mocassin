import React, { useState } from 'react';
import '../App.css';
import Imgcontact from "../images/contact.avif";

function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    const usernamePattern = /^[a-zA-Z ]{3,30}$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernamePattern.test(formData.username)) {
      tempErrors.username = 'Username must be 3-30 characters long and contain only letters.';
    }
    if (!phonePattern.test(formData.telephone)) {
      tempErrors.telephone = 'Telephone number must be exactly 10 digits.';
    }
    if (!emailPattern.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address.';
    }
    if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to a server)
      alert('Form submitted successfully!');
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Formulaire de contact</h2>
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <small className="error-message">{errors.username}</small>}
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Entrer votre numéro de téléphone"
            className={errors.telephone ? 'error' : ''}
          />
          {errors.telephone && <small className="error-message">{errors.telephone}</small>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <small className="error-message">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message ici..."
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <small className="error-message">{errors.message}</small>}
        </div>
        <button type="submit" className="btn">Envoyer</button>
      </form>
      <div className='img-form'>
        <img src={Imgcontact} alt="contact"/>
      </div>
    </div>
  );
}

export default Contact;
