import React, {Component} from 'react';
import Axios from "axios";

export default class SearchField extends Component{
  constructor(props){
    super(props);
    this.state = {value: props.initialValue};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums/search`, {params: {name: this.state.value}}).then(response => {
      console.log("RESPONSE", response.data);
    }).catch(error => console.error(error));
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.value}/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
      </form>
    )
  }

}