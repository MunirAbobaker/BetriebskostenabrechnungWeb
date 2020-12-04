import React, {Component} from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface HeaderProps {

}
const Header: React.FC<HeaderProps> = ({...props}) => {
    const [{fetching: logoutFetching}, logout ] = useLogoutMutation();
    const [{data, fetching}] = useMeQuery();
    let body = null;

    // data is loading
    if(fetching) {

        // user not logged in
    } else if (!data?.me) {

          body = <h3>no user found</h3>
        // user logged in
    } else {
        console.log(data.me)
    body = (<div style={{display: "flex", flexDirection: "row", right: '100px'}}>
    <h2>{data.me.username}</h2>
    <button onClick={ () => logout()} disabled={logoutFetching}>Logout</button>
    </div>)
    }

        return(
            <div style={{position: "fixed", top: '0px'}}>
               {props.children}
               {body}
            </div>
        );

}

export default Header;
