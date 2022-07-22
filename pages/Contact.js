import React, { useState } from 'react'
import { db } from '../components/Firebase';
import contact from './Contact.module.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")  
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };
  
    return (
      <form className={contact.formhead} onSubmit={handleSubmit}>
        <h1 className={contact.header}>Contact Us 🤳</h1> 
  
        <label className={contact.labelfirst}>Name</label>
        <input className={contact.inputtag}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label className={contact.labelfirst}>Email</label>
        <input className={contact.inputtag}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <label className={contact.labelfirst}>Message</label> 
        <textarea className={contact.textareatool} 
          placeholder="Message"
       
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
  
        <button className={contact.buttonlabel}
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Contact; 