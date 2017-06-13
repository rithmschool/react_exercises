import React, { Component } from 'react';
import CustomLink from './CustomLink';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.disableLinks = this.disableLinks.bind(this);

    let anchors = this.props.links.map( (link, i) => {
      return {
        link: link,
        text: this.props.texts[i]
      };
    });
    this.state = { 
      anchors: anchors,
      status: "enabled" 
    }
  }

  disableLinks() {
    this.setState({ status: "disabled" });
  }

  render() {
    
    const aTags = this.state.anchors.map((curLink, i) => (
      <CustomLink
        href={curLink.link}
        text={curLink.text}
        status={this.state.status}
        key={i}
      />
    ))

    return (
      <div className="App">
        {aTags}
        <button onClick={this.disableLinks}>Disable all links</button>
      </div>
    );
  }
}


App.defaultProps = {
  links: [
    "https://github.com/rithmschool/react_exercises/tree/master/03-events-forms-refs-life-cycle/events",
    "https://github.com/uberVU/react-guide/blob/master/props-vs-state.md",
    "https://www.rithmschool.com/courses/react-fundamentals/react-events"
  ],
  texts: [
    "React Events Exercises",
    "Props vs. State",
    "React Events Course Material"
  ]
}

export default App;
