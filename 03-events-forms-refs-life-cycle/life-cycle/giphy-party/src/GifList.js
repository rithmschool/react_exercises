import React, {Component} from 'react'
import AddGifForm from './AddGifForm'

export default class GifList extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs: []
    }
    this.updateList = this.updateList.bind(this)
    this.clearList = this.clearList.bind(this)
  }
  updateList(response){
    this.setState({
      gifs: this.state.gifs.concat(response.data[Math.floor(Math.random()*response.data.length)])
    })
  }
  clearList(){
    this.setState({
      gifs: []
    })
  }
  render(){
    let gifs = this.state.gifs.map((val,idx) => {
      return <div className="col-sm-3" key={idx}>
          <iframe src={val.embed_url}/>
        </div>
    })
    return(
      <div>
        <h1 className="text-center">GIPHY PARTY</h1>
        <AddGifForm handleSubmit={this.updateList} clearGifs={this.clearList}/>
        {gifs}
      </div>
    )
  }
}