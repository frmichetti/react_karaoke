import React, {Component} from 'react';

export default class Card extends Component {
    render() {
        return (
          <div className="card mb-4 shadow-sm">
            <img src={this.props.image} width="100%" height="225"  color="#eceeef" className="card-img-top"  />
            <div className="card-body">
              <p className="card-text">{this.props.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        )
    }
}

