import React, {Component} from 'react';
import Item from "./item";

export default class ItemList extends Component {
  render() {
    return (
      <div>
        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'And Justice For All'} image={'./images/andjusticeforall.jpg'} /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Black Album'} image={'./images/blackalbum.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Death Magnetic'} image={'./images/deathmagnetic.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Load'} image={'./images/load.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Saint Anger Album'} image={'./images/stanger.jpg'} /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Hardwired To Self Destruct'} image={'./images/hardwiredtoselfdestruct.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Kill em All Album'} image={'./images/killemall.jpg'}  /></div>
        </div>

        <div className={'row'}>
          <div className={'col-md-12'}><Item text={'Reload'} image={'./images/reload.jpg'}  /></div>
        </div>



      </div>
    )
  }
}
