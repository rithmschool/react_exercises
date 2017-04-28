import React, {Component} from 'react'

export default class AddGifForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.getGifs = this.getGifs.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetGifs = this.resetGifs.bind(this)
  }
  componentDidMount() {
    let randomTerms = ["happy", "funny", "baby", "silly", "party", "dance", "sing", "music", "jump", "run"];
    fetch(`https://api.giphy.com/v1/gifs/search?q=${randomTerms[Math.floor(Math.random()*randomTerms.length)]}&api_key=dc6zaTOxFJmzC`)
      .then(r => r.json())
      .then(r => {
        this.props.handleSubmit(r)
      })
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getGifs(e){
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(r => r.json())
      .then(r => {
        this.props.handleSubmit(r)
      })
    this.setState({
      searchTerm: ''
    })
  }
  resetGifs(){
    this.props.clearGifs();
  }
  render(){
    return(
        <div>
          <div className="row">
            <form className="form-inline col-sm-offset-3 col-sm-4" onSubmit={this.getGifs}>
              <input type="text" className="form-control" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange}/>
              <input type="submit" className="btn btn-primary" value="Search Giphy"/>
            </form>
            <button className="col-sm-2 btn btn-danger" onClick={this.resetGifs}>Remove Images</button>
          </div>
        </div>
      )
  }
}