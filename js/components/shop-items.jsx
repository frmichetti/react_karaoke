import React, {Component} from 'react';
import Axios from 'axios';

import Pagination from "./pagination";
import GroupButton from './group-button';
import CardList from './card-list';
import ItemList from './item-list';
import Row from './row';
import DetailsModal from "./details-modal";

export default class ShopItems extends Component {
  constructor(props) {
    super(props);
    this.state = {isCardView: props.isCardView};
    this.state.items = [
      {
        text: 'And Justice For All',
        image: './images/andjusticeforall.jpg'
      },
      {
        text: 'Black Album',
        image: './images/blackalbum.jpg'
      },
      {
        text: 'Death Magnetic',
        image: './images/deathmagnetic.jpg'
      },
      {
        text: 'Load',
        image: './images/load.jpg'
      },
      {
        text: 'Saint Anger Album',
        image: './images/stanger.jpg'
      },
      {
        text: 'Hardwired To Self Destruct',
        image: './images/hardwiredtoselfdestruct.jpg'
      },
      {
        text: 'Kill em All Album',
        image: './images/killemall.jpg'
      },
      {
        text: 'Reload',
        image: './images/reload.jpg'
      },
    ];
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      console.log("RESPONSE", response.data);
      this.setState({...this.state, isCardView: true, items: response.data.albums});
    }).catch(error => console.error(error));
  }

  handleViewChange(isCardView) {
    console.log('HANDLE VIEW CHANGE', isCardView);
    this.setState({isCardView: isCardView})
  }

  render() {
    return (
      <div className={'container-fluid'}>
        <Row>
          <div className={'col-md-12'}>
            <GroupButton />
          </div>
            <div className={'col-md-12'}>
              <br/>
            </div>
        </Row>

        {this.state.isCardView ? <CardList items={this.state.items}/> : <ItemList items={this.state.items}/>}

        <Pagination />

        <DetailsModal text={'Todo Get SElected ITEM'} image={''}/>

      </div>
    )
  }
}