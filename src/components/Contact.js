import React from 'react';
import './Contact.scss';
import ContactForm from './ContactForm';


class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <div className="text--container">
          <h2>Contact</h2>
          <ContactForm />
        </div>
        
      </div>
    );
  }
}

export default Contact;