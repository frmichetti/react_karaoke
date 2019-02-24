import React from "react";

export default props => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-secondary" value={false}><i className="fas fa-th-list"></i>&nbsp; List</button>
    <button type="button" className="btn btn-secondary" value={true}><i className="fas fa-th"></i>&nbsp; Cards</button>
  </div>
);