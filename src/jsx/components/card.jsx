import React, {Component} from 'react';
import Grid from "./grid";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.play = this.play.bind(this);
  }

  handleModal(id) {
    this.props.click(id);
    $('#DetailsModal').modal('toggle')
  }

  play(id) {
    this.props.play(id);
    const player = $('#player');
  }

  render() {
    return (
      <Grid columns={'3 3 3 3'}>
          <div className="card mb-4 shadow-sm" style={{width: "18rem"}}>
            <img src={this.props.image} width="100%" height="225" color="#eceeef" className="card-img-top"/>
            <div className="card-body">
              <p className="card-text">{this.props.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {this.props.details && this.props.details.tracks.length > 0 ? (<button type="button" className="btn btn-sm btn-outline-primary" onClick={() => this.handleModal(this.props.id)}>Details</button>) : null}
                  {this.props.song ? <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.play(this.props.id)}>Play</button> : null}
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
      </Grid>
    )
  }
}

