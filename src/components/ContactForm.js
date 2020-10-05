import React from 'react';
import './ContactForm.scss';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  objectToQueryString(obj) {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const _ = e.target;
    let formData = {};

    // set the formData
    for (let i = 0; i < _.length; i++) {
      const el = _.elements[i];
      if (el.getAttribute('name') != null) {
        formData[el.getAttribute("name")] = el.value;
      }
    }

    // POST request URL
    const URL_of_end_point = 'https://script.google.com/macros/s/AKfycbyiX2vxyioc-TzTntLbuwsP-STsyNuIignP_jKnIo9Zb9gzQUkf/exec?action=CREATE_DATA';

    // POST request config
    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }

    try {
      const response = await axios.post(URL_of_end_point, this.objectToQueryString(formData), config);
      if (response.data.success) {
        this.setState({
          isSubmitted: true
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { isSubmitted } = this.state;
    const mainClassName = isSubmitted ? 'isSubmitted' : '';
    return (
      <div className={`contact-form ${mainClassName}`}>
        <div className="form--wrapper">
          <form onSubmit={this.handleFormSubmit}>
            <div id="html_element"></div>
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
            <ReCAPTCHA
              sitekey='6Le8vtMZAAAAADwW_LLXthPT50vVZfA-GaBYG-XL'
            />
            <br/>
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