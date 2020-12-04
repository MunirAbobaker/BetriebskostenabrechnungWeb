import React, {Component} from "react";
import {Link} from 'react-router-dom';

interface CardProps {
    cardInfos: any;
}

class Card extends Component<CardProps> {


    onClickHandler = () => {
        this.props.cardInfos.onNavigationHandler(this.props.cardInfos.id);
    }

    render() {
        return (
            <div  className={""} role="button" onClick={this.onClickHandler}>
                <Link to={'/' + this.props.cardInfos.id}>
                    <h3 className={"text"}>{this.props.cardInfos.title}</h3>
                    <p>{this.props.cardInfos.description}</p>
                </Link>
            </div>
        );
    }
}

export default Card;
