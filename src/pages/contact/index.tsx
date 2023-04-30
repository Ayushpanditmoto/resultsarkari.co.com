import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    const mailtoLink = `mailto:helpesarkari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
  }

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
    
    padding: 2rem;

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 5px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    textarea {
      height: 200px;
    }

    button {
      background-color: #000;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #333;
      }
    }
  }
`;
