import React, { Component } from 'react';
import CustomLink from './CustomLink';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.disableLinks = this.disableLinks.bind(this);
    var anchors = [];
    const numAnchors = 3;
    for (var i=0; i < numAnchors; i++) {
      anchors.push({
        link: this.props.links[i],
        text: this.props.texts[i]
      })
    }
    this.state = { anchors }
  }

  disableLinks() {
    let newAnchors = this.state.anchors.map((curLink) => (
      curLink.link = "JavaScript:Void(0);"
    ))
    this.setState({ newAnchors });
  }


  render() {
    
    const aTags = this.state.anchors.map((curLink, i) => (
      <CustomLink
        href={curLink.link}
        text={curLink.text}
        handleClick={this.disableLinks}
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
