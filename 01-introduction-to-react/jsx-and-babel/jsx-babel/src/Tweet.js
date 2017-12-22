import React, { Component } from 'react';
import './Tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Tweet extends Component {
  render() {
    return (
      // <p className='center'>{this.props.name} {this.props.username} {this.props.date} {this.props.message} </p>
	  <Card>
	    <CardHeader
	      title={this.props.name}
	      subtitle={this.props.date}
	      avatar="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg"
	    />
	    <CardMedia
	      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
	    >
	      <img src="https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg" alt="" />
	    </CardMedia>
	      <img src="images/nature-600-337.jpg" alt="" />
	    <CardTitle title="Tweet Title" subtitle="Category of tweet" />
	    <CardText>
	      {this.props.message}
	    </CardText>
	  </Card>

    );
  }
}

export default Tweet;