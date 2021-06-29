import React from 'react';
import './About.scss';


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <div className="text--container">
          <h2>About</h2>
          <p>
            Hi! My name is Johnson Kit. I am a web developer from Hong Kong. Work closely with designers and build nice user experience web pages.
          </p>
          <p>
            My skills are as below:
          </p>
          <p>
            <u>Programming Languages:</u><br/>
            HTML/HTML5/Nunjucks, CSS/CSS3/SASS/SCSS/LESS/BEM,
            JavaScript/TypeScript, PHP, Ruby, SQL
          </p>
          <p>
            <u>Libraries / Frameworks:</u><br/>
            jQuery, React, Node.js, Bootstrap, Laravel 8, Ruby on Rails
          </p>
          <p>
            <u>Tools:</u><br/>
            Git, Gulp, Webpack
          </p>
          <p>
            <u>Testing:</u><br/>
            Cypress, Cross-Browser and Cross-Device Testing
          </p>
          <p>
            <u>CMS:</u><br/>
            WordPress, Adobe Experience Manager, Umbraco, ATG Business Control
  Center System
          </p>
          <p>
            <u>Web development:</u><br/>
            Responsive Web Development, SEO
          </p>
          <p>
            <u>Languages:</u><br/>
            Intermediate English, native Cantonese speaker, and fluent Mandarin
          </p>
        </div>
        
      </div>
    );
  }
}

export default About;