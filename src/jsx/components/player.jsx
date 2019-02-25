import React from 'react';

export default props => (
  <div className={'container'} >
    <div className={'row'}>
      <div className={'col col-md-12'}>
        <div className="player">
          <div className="left" style={{backgroundImage: props.item.image}}></div>
          <div className="right">
            <div className="top">
              <a className="song">{props.item.song.name}</a>&nbsp;
              <a className="artist">{props.item.artist}</a>
            </div>
            <div className="bottom">
              <audio controls={true} autoPlay={true} name={"media"} loop={true} id={"#player"} src={props.item.song.url}></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)