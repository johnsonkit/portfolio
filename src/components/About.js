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
            Hi! I am Johnson Kit, a web developer based in Hong Kong.
          </p>
          <p>
            My skills are as follows:
          </p>
          <p>
            <u>Programming Languages:</u><br/>
            HTML/HTML5/Nunjucks, CSS/CSS3/SASS/SCSS/LESS/BEM, JavaScript/TypeScript/Google Apps Script, PHP, Ruby, SQL
          </p>
          <p>
            <u>Libraries / Frameworks:</u><br/>
            jQuery, React, Node.js, Bootstrap, Ruby on Rails, Laravel 8
          </p>
          <p>
            <u>Database</u><br/>
            MySQL, Firebase and MongoDB in NoSQL
          </p>
          <p>
            <u>Tools / Technologies:</u><br/>
            Git, Gulp, Webpack, Responsive Web Development, SEO
          </p>
          <p>
            <u>Testing:</u><br/>
            Cypress, Cross-Browser and Cross-Device Testing
          </p>
        </div>
        
      </div>
    );
  }
}

export default About;