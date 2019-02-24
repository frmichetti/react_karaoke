import React, {Component} from 'react';
import Item from "./item";
import Row from './row';

export default class ItemList extends Component {
  render() {
    return (
      <div>
      {
        this.props.items.map((item, idx) => (
          <Row key={idx}>
            <Item text={item.text} image={item.image} />
          </Row>
        ))
      }
      </div>
    )
  }
}
