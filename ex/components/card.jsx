import React, {Component} from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className={"card"} style={{width: '18rem'}}>
                <img className={"card-img-top"} src={this.props.image} alt="Card image cap"/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{this.props.title}</h5>
                    <p className={"card-text"}>{this.props.text}</p>
                </div>
                <ul className={"list-group list-group-flush"}>
                    {this.props.items.map((i,idx) => <li key={idx} className={"list-group-item"}>{i}</li>)}
                </ul>
                <div className={"card-body"}>
                    <a href="#" className={"card-link"}>Card link</a>
                    <a href="#" className={"card-link"}>Another link</a>
                </div>
            </div>
        )
    }
}

