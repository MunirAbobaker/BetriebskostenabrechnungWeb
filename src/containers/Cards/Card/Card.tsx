import React, {Component} from "react";

interface CardProps {
    cardInfos: any
}
class Card extends Component<CardProps> {
    componentDidUpdate(prevProps: Readonly<CardProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("updated")
    }

    onClickHandler = () => {
        this.props.cardInfos.onNavigationHandler(this.props.cardInfos.title);
    }
    render(){
        return(
            <a href="#" className={"card"}  role="button" onClick={this.onClickHandler}>
                <h3>{this.props.cardInfos.title}</h3>
                <p>{this.props.cardInfos.description}</p>
                <p>{this.props.cardInfos.description}</p>
                <p>{this.props.cardInfos.description}</p>
            </a>
        );
    }
}

export default Card;
