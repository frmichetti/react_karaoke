import React, {Component} from 'react';
import Item from "./item";
import Row from './row';

export default class ItemList extends Component {
  constructor(props){
    super(props);
    this.state = {items: props.items}
  }
  render() {
    return (
      <div>
      {
        this.state.items.map((item, idx) => (
          <Row key={idx}>
            <Item text={item.text} image={item.image} />
          </Row>
        ))
      }
      </div>
    )
  }
}
