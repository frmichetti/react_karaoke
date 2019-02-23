import React, {Component} from 'react';
import Pagination from "./pagination";
import GroupButton from './group-button';
import CardList from './card-list';
import ItemList from './item-list';

export default class ShopItems extends Component {
  constructor(props){
    super(props);
    this.state = {isCardView: props.isCardView};
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange(isCardView){
    console.log('HANDLE VIEW CHANGE', isCardView);
    this.setState({isCardView: isCardView})
  }

  render() {
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <GroupButton />
          </div>
          <div className={'margin-bottom-5'}>
            <div className={'col-md-12'}>
              <br />
            </div>
          </div>
        </div>

        { this.state.isCardView ? <CardList /> : <ItemList /> }

        <Pagination />

      </div>
    )
  }
}