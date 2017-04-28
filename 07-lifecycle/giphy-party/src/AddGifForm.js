import React, {Component} from 'react'

export default class AddGifForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.getGifs = this.getGifs.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getGifs(e){
    e.preventDefault()
  }
  render(){
    return(
        <div>
          <form onSubmit={this.getGifs}>
            <input type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange}/>
            <input type="submit" className="btn btn-primary" value="Search Giphy"/>
          </form>

          <button className="btn btn-danger" onClick={this.resetGifs}>Remove Images</button>
        </div>
      )
  }
}