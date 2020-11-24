import React, {Component} from "react";

import Header from './components/Headers';
import Footer from './components/Footer';
import OperationExpenseView from "./containers/OperationExpenseView";
import './style.less';
class App extends Component {

    render() {
        return (
            <>
                <Header />
                <div className={"container"}>
                    <OperationExpenseView title={"Betriebskostenabrechnng"} />
                    <Footer/>
                </div>
            </>
        );
    }
}

export default App;
