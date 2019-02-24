import React from "react";

export default props => (
  <div className="btn-group" role="group" aria-label="Basic example" style={{marginBottom: '20px', marginTop: '20px'}}>
    <button type="button" className="btn btn-secondary" onClick={props.showRows}><i className="fas fa-th-list"></i>&nbsp; List</button>
    <button type="button" className="btn btn-secondary" onClick={props.showCards}><i className="fas fa-th"></i>&nbsp; Cards</button>
  </div>
);