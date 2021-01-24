import React, { Component } from "react";
import Card from "./Card/Card";
import { ThemeConsumer } from "styled-components";
import { Card as StyledCard } from "../../helpers/Button";

interface CardsProps {
  cardsData: any;
  userLoggedIn: string;
}

class Cards extends Component<CardsProps> {
  cardToRender = () => {
    let cards = [];
    this.props.cardsData.forEach((card) => {
      if (this.props.userLoggedIn) {
        if (card.id != "login") {
          cards.push(card);
        }
      } else {
        if (card.id != "logout") {
          cards.push(card);
        }
      }
    });

    return cards;
  };
  render(): React.ReactNode {
    return (
      <>
        {this.cardToRender().map((card) => {
          return (
            
              <ThemeConsumer>
                {(theme) => (
                  <StyledCard
                    variant="primary"
                    className={
                      this.props.userLoggedIn && card.id === "register"
                        ? "NotAllowed"
                        : ""
                        || (!this.props.userLoggedIn && card.id === "create") ? "NotAllowed"
                        : ""
                        || (!this.props.userLoggedIn && card.id === "templates") ? "NotAllowed"
                        : ""
                    }
                  >
                    <Card
                      cardInfos={card}
                      userLoggedIn={this.props.userLoggedIn}
                    />
                  </StyledCard>
                )}
              </ThemeConsumer>
          );
        })}
      </>
    );
  }
}

export default Cards;

