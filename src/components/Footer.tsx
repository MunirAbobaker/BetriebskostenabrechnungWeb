import React, {Component} from "react";

class Footer extends Component {
    render(){
        return(
            <footer>
                <a
                    href="p"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="DHBW" className="logo" />
                </a>
            </footer>
        );
    }
}

export default Footer;
