import React, {Component} from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    $('#DetailsModal').modal('toggle')
  }

  render() {
    return (
      <div className={'col-md-3'}>
        <div className="card mb-4 shadow-sm" style={{width: "18rem"}}>
          <img src={this.props.image} width="100%" height="225" color="#eceeef" className="card-img-top"/>
          <div className="card-body">
            <p className="card-text">{this.props.text}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleModal}>Details
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

