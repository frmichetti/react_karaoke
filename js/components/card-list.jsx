import React, {Component} from 'react';
import Card from "./card";

export default class CardList extends Component {
  render() {
    return (
      <div>
        <div className={'row'}>
          <div className={'col-md-3'}><Card text={'And Justice For All'} image={'./images/andjusticeforall.jpg'} /></div>
          <div className={'col-md-3'}><Card text={'Black Album'} image={'./images/blackalbum.jpg'}  /></div>
          <div className={'col-md-3'}><Card text={'Death Magnetic'} image={'./images/deathmagnetic.jpg'}  /></div>
          <div className={'col-md-3'}><Card text={'Load'} image={'./images/load.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-3'}><Card text={'Saint Anger Album'} image={'./images/stanger.jpg'} /></div>
          <div className={'col-md-3'}><Card text={'Hardwired To Self Destruct'} image={'./images/hardwiredtoselfdestruct.jpg'}  /></div>
          <div className={'col-md-3'}><Card text={'Kill em All Album'} image={'./images/killemall.jpg'}  /></div>
          <div className={'col-md-3'}><Card text={'Reload'} image={'./images/reload.jpg'}  /></div>
        </div>
      </div>
    )
  }
}