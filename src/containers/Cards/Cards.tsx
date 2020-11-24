import React, {Component} from "react";
import Card from './Card/Card';

interface CardsProps {
    cardsData: any
}

class Cards extends Component<CardsProps> {
    render(): React.ReactNode {
        return (
            <>
                {this.props.cardsData.map(card => {
                    return (<Card key={card.title} cardInfos={card}/>)
                })}
            </>
        );
    }
}

export default Cards;
