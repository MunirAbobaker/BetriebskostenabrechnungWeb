import React, {Component} from "react";

interface HeaderProps {

}
class Header extends Component<HeaderProps> {
    render(){
        return(
            <div>
                <link rel="icon" href="/favicon.ico" />
            </div>
        );
    }
}

export default Header;
