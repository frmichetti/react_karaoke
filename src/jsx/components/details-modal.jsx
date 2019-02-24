import React from 'react';

const msToTime = duration => {
  let milliseconds = parseInt((duration%1000)/100)
    , seconds = parseInt((duration/1000)%60)
    , minutes = parseInt((duration/(1000*60))%60)
    , hours = parseInt((duration/(1000*60*60))%24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
};

export default props => (
  <div className={"modal fade"} id="DetailsModal" tabIndex="-1" role="dialog"
       aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className={"modal-dialog modal-dialog-centered"} role="document">
      <div className={"modal-content"}>
        <div className={"modal-header"}>
          <h5 className={"modal-title"}>{props.item.text}</h5>
          <button type="button" className={"close"} data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {props.item.details["large-images"].map((image, idx) => (
                <li key={idx} data-target="#carouselExampleIndicators" data-slide-to={idx} className={idx === 0 ? "active": ""}></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {props.item.details["large-images"].map((image, idx) => (
                <div key={idx} className={idx === 0 ? "carousel-item active": "carousel-item"}>
                  <img className="d-block w-100" src={image} alt="First slide" />
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <table className="table table-striped table-dark">
            <thead>
            <tr>
              <th scope="col">Track</th>
              <th scope="col">Title</th>
              <th scope="col">Duration</th>
              <th scope="col">Composers</th>
            </tr>
            </thead>
            <tbody>
            {props.item.details.tracks.map((t, idx) => (
              <tr key={idx}>
                <th scope="row">{t.id}</th>
                <td>{t.title}</td>
                <td>{msToTime(t.duration)}</td>
                <td>{t.composers}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
)