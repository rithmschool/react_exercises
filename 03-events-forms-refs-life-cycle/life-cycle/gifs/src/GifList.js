import React, {Component} from 'react'
import GifForm from './GifForm'

class GifList extends Component{
  
   constructor(props){
	   	super(props);

	   	this.state={
	         gifs : []
	   	}

	   	this.removeGif = this.removeGif.bind(this);
	   	this.getGif = this.getGif.bind(this);

   }

    removeGif(){
        this.setState({
        	gifs : [] 
        });
   }

    getGif(response){
        this.setState({
            gifs: [...this.state.gifs, response.data[Math.floor(Math.random()*response.data.length)]]
        });
    }

    render(){
    	let list = this.state.gifs.map((gif, idx)=>{
    		return <div key={idx}><iframe src={gif.embed_url}/></div>
    	})
    	return(
    		<div>
	             <h1>GIPHY PARTY</h1>
	             <GifForm removeGif={this.removeGif} getGif={this.getGif} /> 
	             {list}
	        </div>
    	);
    }

}

export default GifList;