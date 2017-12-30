import React, {Component} from 'react'
import GifForm from './GifForm'

class GifList extends Component{
  
   constructor(props){
	   	super(props);

	   	this.state={
	         gifs : ["hi"]
	   	}

	   	this.removeGifs = this.removeGifs.bind(this);
	   	this.getGif = this.getGif.bind(this);

   }

    removeGifs(){
        this.setState({
        	gifs : [] 
        });
   }

    getGif(response){
        this.setState({
            gifs: [response.data[Math.floor(Math.random()*response.data.length)], ...this.state.gifs]
        });
    }

    render(){
    	let list = this.state.gifs.map((gif, idx)=>{
    		return <div key={idx}> <iframe src={gif.embed_url} /></div>
    	})
    	return(
    		<div>
	             <GifForm removeGifs={this.removeGifs} getGif={this.getGif} /> 
	             {list}
	        </div>
    	);
    }

}

export default GifList;