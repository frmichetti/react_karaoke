import React, {Component} from 'react';
import Card from "./card";
import _ from 'lodash';

export default class CardList extends Component {
  constructor(props){
    super(props);
    this.state = {items: props.items}
  }
  render() {
    return (
      <div>
        {
          _.chunk(this.state.items, 4).map((group, i) => (
          <div className={'row'} key={i}>
            {group.map((item, idx) => (<Card text={item.text} image={item.image} key={idx}/>))}
          </div>
          ))
        }
      </div>
    )
  }
}