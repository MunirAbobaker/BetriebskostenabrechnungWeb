import React, {Component} from "react";
import Cards from './Cards/Cards'

interface CardData {
    title: string,
    description: string,
    onNavigationHandler: (selectedBox: string) => void;
}

interface CardsData {
    cards: CardData [];
}
interface OperationExpenseViewProps {
    title: string,
}

class OperationExpenseView extends Component<OperationExpenseViewProps> {
    cardsData: CardsData;

    constructor(props) {
        super(props);

        this.cardsData = {
            cards: [
                {
                    title: 'Login',
                    description: 'Login to take a look at your templates and save new ones.',
                    onNavigationHandler: this.loginNavigationHandler
                },

                {
                    title: 'Register',
                    description: 'Use Template to save your self time and effort.',
                    onNavigationHandler: this.registerNavigationHandler
                },

                {
                    title: 'Neue Abrechnung',
                    description: '  if you don not have Template you can create one now.',
                    onNavigationHandler: this.createNavigationHandler
                },

                {
                    title: 'Templates',
                    description: 'to be able to save your ancillaries please register first!',
                    onNavigationHandler: this.templateNavigationHandler
                },
            ]
        },
         this.loginNavigationHandler.bind(this);
         this.registerNavigationHandler.bind(this);
         this.createNavigationHandler.bind(this);
         this.templateNavigationHandler.bind(this);
    }

    loginNavigationHandler = (selectedBox: string): void => {
        console.log(selectedBox);

    }

    registerNavigationHandler = (selectedBox: string): void => {
        console.log(selectedBox);
    }

    createNavigationHandler = (selectedBox: string): void => {
        console.log(selectedBox);
    }

    templateNavigationHandler = (selectedBox: string): void => {
        console.log(selectedBox);
    }

    render() {
        return (
            <main>
                <h1>BKAS</h1>
                <h1 className={"title"}>
                    {this.props.title}
                </h1>
                <div className={"grid"}>
                    <Cards cardsData={this.cardsData.cards}/>
                </div>
            </main>
        );
    }
}

export default OperationExpenseView;
