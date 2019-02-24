import React, {Component} from 'react';
import Axios from 'axios';

import Pagination from "./pagination";
import GroupButton from './group-button';
import CardList from './card-list';
import ItemList from './item-list';
import Row from './row';
import DetailsModal from "./details-modal";
import Grid from "./grid";

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
    this.showCards = this.showCards.bind(this);
    this.showRows = this.showRows.bind(this);
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      console.log("RESPONSE", response.data);
      this.setState({...this.state, isCardView: true, items: response.data.albums});
    }).catch(error => console.error(error));
  }

  showCards() {
    this.setState({isCardView: true})
  }

  showRows(){
    this.setState({isCardView: false})
  }

  render() {
    return (
      <div className={'container-fluid'} style={{marginBottom: '20px', marginTop: '20px'}}>
        <Row>
          <Grid columns={'12 12 12 12'}>
            <GroupButton showCards={this.showCards} showRows={this.showRows}/>
          </Grid>
        </Row>

        {this.state.isCardView ? <CardList items={this.state.items}/> : <ItemList items={this.state.items}/>}

        <Pagination />

        <DetailsModal text={'Todo Get SElected ITEM'} image={''}/>

      </div>
    )
  }
}