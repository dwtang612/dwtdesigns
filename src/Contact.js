import React, { useState } from 'react';
//------------------------------------------------------------------------------FORM VALIDATION SECTION------------------------------------------------------------------------------
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (!message) formErrors.message = 'Message is required';
    return formErrors;
  };
  //------------------------------------------------------------------------------EMAIL API SECTION------------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page refresh on form submission
    const formErrors = validateForm();  // Validate form inputs

    if (Object.keys(formErrors).length === 0) {
      try {
        // Make the API call to send the form data
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        });

        // Check if the request was successful
        if (response.ok) {
          // Success: Show a success message and clear the form
          alert('Message sent successfully!');
          setName('');  // Clear the name field
          setEmail('');  // Clear the email field
          setMessage('');  // Clear the message field
          setErrors({});  // Clear any form errors
        } else {
          // Failure: Show an error message
          alert('Failed to send the message. Please try again later.');
        }
      } catch (error) {
        // Handle any network or server errors
        console.error('Error sending message:', error);
        alert('There was an error sending your message.');
      }
    } else {
      // If there are validation errors, set them in the state to show in the form
      setErrors(formErrors);
    }
  };
  //------------------------------------------------------------------------------HTML SECTION------------------------------------------------------------------------------
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'error-input' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
