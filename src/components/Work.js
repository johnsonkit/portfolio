import React from 'react';
import './Work.scss';


class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work">
        <div className="text--container">
          <h2>Work</h2>
          <p>
          Past few years, I have had the pleasure to work with the companies, including EF Education First, Tofugear, and LaneCrawford.

          If you would like to see some examples, please drop me a message. I'll send you some examples.

          </p>
          <h2>Project</h2>
          <ul>
            <li>
              <a href="https://johnsonkit.github.io/responsive-web-page-sample/dist/" target="_blank">Responsive Web Page Sample (HTML, CSS, and JavaScript)</a>
            </li>
            <li>
              <a href="https://johnsonkit.github.io/tic-tac-toe-react/" target="_blank">Tic Tac Toe (React)</a>
            </li>
            <li>
              <a href="https://johnsonkit.github.io/simon-game/dist/" target="_blank">Simon Game (HTML, CSS, and JavaScript)</a>
            </li>
            <li>
              <a href="https://johnsonkit.github.io/lightweight-web-script/" target="_blank">Lightweight Web Script - ScrollTo effect (pure JavaScript)</a>
            </li>
            <li>
              <a href="https://github.com/johnsonkit/batch-process-images" target="_blank">Batch images processing (gulp)</a>
            </li>
            <li>
              <a href="https://github.com/johnsonkit/simple-frontend-starter" target="_blank">Custom front-end development template (gulp)</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Work;