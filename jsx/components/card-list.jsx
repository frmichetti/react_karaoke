import React, {Component} from 'react';
import Card from "./card";
import Row from './row'
import _ from 'lodash';

export default class CardList extends Component {
  render() {
    return (
      <div>
        {
          _.chunk(this.props.items, 4).map((group, i) => (
          <Row key={i}>
            {group.map((item, idx) => (<Card text={item.text} image={item.image} key={idx}/>))}
          </Row>
          ))
        }
      </div>
    )
  }
}