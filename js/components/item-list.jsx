import React, {Component} from 'react';
import Item from "./item";

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
          <div className={'row'} key={idx}>
            <Item text={item.text} image={item.image} />
          </div>
        ))
      }
      </div>
    )
  }
}
