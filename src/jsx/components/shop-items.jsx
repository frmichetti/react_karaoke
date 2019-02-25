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
import Player from "./player";

export default class ShopItems extends Component {
  constructor(props) {
    super(props);
    const emptyItem = {artist: "" , song: {}, details: {tracks: [],  "large-images": []}};
    this.state = {isCardView: props.isCardView, selectedItem: emptyItem, items: []};
    this.showCards = this.showCards.bind(this);
    this.showRows = this.showRows.bind(this);
    this.changeSelectedItem = this.changeSelectedItem.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      this.setState({...this.state, items: response.data.albums});
    }).catch(error => console.error(error));
  }

  showCards() {
    this.setState({...this.state, isCardView: true})
  }

  showRows(){
    this.setState({...this.state, isCardView: false})
  }

  changeSelectedItem(id) {
    const item = _.filter(this.state.items, {id})[0];
    this.setState({...this.state, selectedItem: item})
  }

  play(id){
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

        {this.state.isCardView ? <CardList items={this.state.items} click={this.changeSelectedItem} play={this.play}/> : <ItemList items={this.state.items}/>}

        <Pagination />

        <Player item={this.state.selectedItem} />

        <DetailsModal item={this.state.selectedItem}/>

      </div>
    )
  }
}