import React, {Component} from 'react'
import AddGifForm from './AddGifForm'

export default class GifList extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs: []
    }
  }
  render(){
    let gifs = this.state.gifs.map(val => {
      return <div>Hello!</div>
    })
    return(
      <div>
        <h1>GIPHY PARTY</h1>
        <AddGifForm/>
        {gifs}
      </div>
    )
  }
}