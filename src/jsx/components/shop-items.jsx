import React, {Component} from 'react';
import Axios from 'axios';
import _ from 'lodash';

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
    this.state = {isCardView: props.isCardView, selectedItem: {details: {tracks: [],  "large-images": []}}};
    this.state.items = [
      {
        id: 1,
        text: 'And Justice For All',
        image: 'http://localhost:3000/static/andjusticeforall.jpg',
        details: {
          "large-images": ['http://localhost:3000/static/andjusticeforall-large.jpg', 'http://localhost:3000/static/andjusticeforall-large.jpg', 'http://localhost:3000/static/andjusticeforall-large.jpg'],
          tracks: [
            {id: 1, title: "Blackened", duration: 38460, composers: 'James Hetfield, Lars Ulrich, Jason Newsted'},
            {id: 2, title: "…And Justice for All" , duration: 56820, composers: "Hetfield, Ulrich, Kirk Hammett"},
          ]
        }
      },
      {
        id: 2,
        text: 'Black Album',
        image: 'http://localhost:3000/static/blackalbum.jpg',
        details: {
          "large-image": ['http://localhost:3000/static/black-album-large.jpg', 'http://localhost:3000/static/black-album-large.jpg', 'http://localhost:3000/static/black-album-large.jpg'],
          tracks: [
            {id: 1, title: "Enter Sandman", duration: 32040, composers: 'Kirk HammettLars UlrichHetfield'},
            {id: 2, title: "Sad but True" , duration: 31440, composers: 'Ulrich Hetfield'},
          ]
        }
      },
      {
        id: 3,
        text: 'Death Magnetic',
        image: 'http://localhost:3000/static/deathmagnetic.jpg'
      },
      {
        id: 4,
        text: 'Load',
        image: 'http://localhost:3000/static/load.jpg'
      },
      {
        id: 5,
        text: 'Saint Anger Album',
        image: 'http://localhost:3000/static/stanger.jpg'
      },
      {
        id: 6,
        text: 'Hardwired To Self Destruct',
        image: 'http://localhost:3000/static/hardwiredtoselfdestruct.jpg'
      },
      {
        id: 7,
        text: 'Kill em All Album',
        image: 'http://localhost:3000/static/killemall.jpg'
      },
      {
        id: 8,
        text: 'Reload',
        image: 'http://localhost:3000/static/reload.jpg'
      },
    ];
    this.showCards = this.showCards.bind(this);
    this.showRows = this.showRows.bind(this);
    this.changeSelectedItem = this.changeSelectedItem.bind(this);
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      console.log("RESPONSE", response.data);
      // this.setState({...this.state, items: response.data.albums});
    }).catch(error => console.error(error));
  }

  showCards() {
    this.setState({...this.state, isCardView: true})
  }

  showRows(){
    this.setState({...this.state, isCardView: false})
  }

  changeSelectedItem(id) {
    console.log('changeSelectedItem', id);
    const item = _.filter(this.state.items, {id})[0];
    this.setState({...this.state, selectedItem: item})
  }

  render() {
    return (
      <div className={'container-fluid'} style={{marginBottom: '20px', marginTop: '20px'}}>
        <Row>
          <Grid columns={'12 12 12 12'}>
            <GroupButton showCards={this.showCards} showRows={this.showRows}/>
          </Grid>
        </Row>

        {this.state.isCardView ? <CardList items={this.state.items} click={this.changeSelectedItem}/> : <ItemList items={this.state.items}/>}

        <Pagination />

        <DetailsModal item={this.state.selectedItem}/>

      </div>
    )
  }
}