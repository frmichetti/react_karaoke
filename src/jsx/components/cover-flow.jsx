import React, {Component} from 'react';
import Axios from "axios";

export default class CoverFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }

  componentWillMount(){
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      this.setState({...this.state, items: response.data.albums});
    }).catch(error => console.error(error));
  }

  render() {
    return (
      <div className="cover-body">
        <div className="container">
          <div className="wgh-slider">
            {this.state.items.map((item, idx) => (
              <input className="wgh-slider-target" type="radio" id={`slide-${idx + 1}`} name={"slider"} defaultChecked={idx === 0 ? "checked": ""}/>)
            )}

            <div className="wgh-slider__viewport">
              <div className="wgh-slider__viewbox">
                <div className="wgh-slider__container">

                  {this.state.items.map((item, idx) => (
                    <div className="wgh-slider-item" key={idx}>
                      <div className="wgh-slider-item__inner">
                        <figure className="wgh-slider-item-figure">
                          <img className="wgh-slider-item-figure__image" src={item.image} alt={item.text}/>
                          <figcaption className="wgh-slider-item-figure__caption">
                            <a href={item.image}>{item.artist}</a><span> {item.text}</span>
                          </figcaption>
                        </figure>
                      </div>
                      <label className="wgh-slider-item__trigger" htmlFor={`slide-${idx + 1}`} title={`Show ${item.text}`}></label>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}