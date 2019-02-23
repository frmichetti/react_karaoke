import React, {Component} from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={'rows'}>
          <div className={'col-md-2'}>
            <img className="card-img-bottom" src={this.props.image} alt="Card image cap" style={{maxWidth: '07rem', float: 'left', marginRight: '15px'}}/>
          </div>
          <div className={'col-md-10'}>
            <div className={"card-body"}>
              <h5 className={"card-title"}>{this.props.text}</h5>
              <p className={"card-text"}>{this.props.text}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}