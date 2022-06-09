import React from 'react';
import './Home.scss';
import About from './About';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        {/* <h2>Home</h2> */}
        <div className="hero">
          <h2>Johnson Kit<br />Web Developer</h2>
        </div>
        <About />
      </div>
    );
  }
}

export default Home;