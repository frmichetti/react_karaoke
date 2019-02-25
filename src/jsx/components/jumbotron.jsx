import React, {Component} from 'react';

export default class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{this.props.title}</h1>
          <p className="lead text-muted">{this.props.text}</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>&nbsp;
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>
    )
  }
}