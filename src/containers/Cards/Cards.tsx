import React, {Component} from "react";


import Wrapper from "./Card/Wrapper";
import Card from './Card/Card';



interface CardsProps {
    cardsData: any;
}

class Cards extends Component<CardsProps> {
    render(): React.ReactNode {
        return (
            <>
                {this.props.cardsData.map(card => {
                    return (<Wrapper > <Card cardInfos={card}/></Wrapper>  )
                })}
            </>
        );
    }
}

export default Cards;




