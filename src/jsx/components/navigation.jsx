import React, {Component} from 'react';
import SearchField from "./search-input";

export default class Navigation extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <a className="navbar-brand" href="#"><img src="http://localhost:3000/static/logo-svg-white.svg" alt="" width={'40px'} height={'40px'} style={{fill: '#ffffff'}} className={'image'}/>Metallica Store</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="./#/home">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./#/link">Link</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">Dropdown</a>
                          <div className="dropdown-menu" aria-labelledby="dropdown01">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                      </li>
                  </ul>

                  <SearchField initialValue={''} />
              </div>
          </nav>
        )
    }
}


