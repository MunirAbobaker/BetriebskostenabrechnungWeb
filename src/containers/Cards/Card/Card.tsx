import React, {Component} from "react";
import {Link} from 'react-router-dom';
const path = require('path');


interface CardProps {
    cardInfos: any;
}

class Card extends Component<CardProps> {

    onClickHandler = () => {
    }

    render() {
        return (
            <div key={this.props.cardInfos.id} className="cardTest" role="button" onClick={this.onClickHandler}>
                <Link to={'/' + this.props.cardInfos.id}>
                    <img className="images" alt={this.props.cardInfos.title} src={window.location.origin+ '/assets/' + this.props.cardInfos.id+ '.png' }/>
                   
                    <h3 className={"text"}>{this.props.cardInfos.title}</h3>
                  {/*   <p>{this.props.cardInfos.description}</p> */}
                </Link>
            </div>
        );
    }
}

export default Card;
