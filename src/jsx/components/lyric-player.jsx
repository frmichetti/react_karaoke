import React, {Component} from 'react';

export default class LyricPlayer extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="pbody">

        <div className="content">
          <div className="lyrics"></div>
        </div>

        <div className="player">
          <div className="left"></div>
          <div className="right">
            <div className="top">
              <a className="song">Enter Sandman</a>
              <a className="artist">Metallica</a>
            </div>
            <div className="bottom">
              <video controls={""} autoPlay={"true"} name={"media"}>
                <source src="http://localhost:3000/musics/enter-sandman.mp3" type="audio/mpeg"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    )
  }
}