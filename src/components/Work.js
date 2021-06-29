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
          <ul>
            <li>
              <a href="https://www.ef.com.hk/ec/promo/tactic/20200917_01/" target="_blank">Digitized A Form</a>
            </li>  
            <li>
              <a href="https://script.google.com/macros/s/AKfycbyHlnnn4ElffHzrSSwS1RDLIHYApPBft5dTQ4a11e-668XuFFII/exec" target="_blank">Digitalized A Form With Signature</a>
            </li>
            <li>
              <a href="https://mini-spelling-game-2020.netlify.app" target="_blank">Multiple Choice Typing Game With Sports English</a>
            </li>
            <li>
              <a href="https://www.ef.com.hk/ec/promo/tactic/20201214_01_quiz/" target="_blank">Multiple Choice Quiz With Home English</a>
            </li>
            <li>
              <a href="http://www.englishtown.com/online/lp/hk/oth/190711_01_landing.aspx" target="_blank">A Memory Game (Landing page)</a>
            </li>
            <li>
              <a href="http://www.englishtown.com/online/lp/hk/oth/190711_01_game.aspx" target="_blank">A Memory Game</a>
            </li>
            <li>
              <a href="http://www.englishtown.com/online/lp/hk/oth/171124_quiz.aspx" target="_blank">A Game To Distinguish The Words In UK Or US Style</a>
            </li>
          </ul>
          
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