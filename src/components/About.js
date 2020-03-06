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
            Hi! My name is Johnson Kit. I am a web developer from Hong Kong and now in London. My previous working experiences were mainly on the front-end and had some experiences in PHP and Ruby on Rails. My web development stack is HTML, CSS, and JavaScript.
          </p>
          <p>
            I like reading books, taking online courses, and joining the meetup group to learn about the latest web development skills.
          </p>
          <p>
            My skills are as below:
          </p>
          <p>
            <u>Programming Languages:</u><br/>
            HTML/HTML5/Nunjucks, CSS/CSS3/SASS/SCSS/LESS/BEM,
            JavaScript/TypeScript, PHP, Ruby
          </p>
          <p>
            <u>Libraries / Frameworks:</u><br/>
            jQuery, React, Node.js, Bootstrap, Ruby on Rails
          </p>
          <p>
            <u>Tools:</u><br/>
            Git, Gulp, Webpack
          </p>
          <p>
            <u>Testing:</u><br/>
            Jasmine, Cross-Browser and Cross-Device Testing
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
          <p>
            Apart from work, I like Chinese tea culture, calligraphy, meditation, and yoga.
          </p>
        </div>
        
      </div>
    );
  }
}

export default About;