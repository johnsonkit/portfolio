import React from 'react';
import './ContactForm.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    e.target.submit();

    this.setState({
      isSubmitted: true
    })
  }

  render() {
    const { isSubmitted } = this.state;
    const mainClassName = isSubmitted ? 'isSubmitted' : '';
    return (
      <div className={`contact-form ${mainClassName}`}>
        <div className="form--wrapper">
          <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} title='formIframe'></iframe>
          <form action="https://script.google.com/macros/s/AKfycbyiX2vxyioc-TzTntLbuwsP-STsyNuIignP_jKnIo9Zb9gzQUkf/exec" method="POST" target="hidden_iframe" onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">
              <span className="label-title">Name:</span> 
              <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="email">
              <span className="label-title">Email:</span> 
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="message">
              <span className="label-title">Message:</span> 
              <textarea name="message" id="message" rows="10" cols="50" />
            </label>
            <input type="hidden" name="method" value="CREATE_DATA" />
            <button id="submit-btn" className="submit" type="submit">Send</button>
          </form>
        </div>
        <div className='thank-you--wrapper'>
          Thanks for your message.
        </div>
      </div>
    );
  }
}

export default ContactForm;