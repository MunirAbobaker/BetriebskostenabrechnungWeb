import * as React  from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface HeaderProps {
    children: any;
}
const Header: React.FC<HeaderProps> = (props: React.PropsWithChildren<HeaderProps>) => {
    const [{fetching: logoutFetching}, logout ] = useLogoutMutation();
    const [{data, fetching}] = useMeQuery();
    let body = null;

    // data is loading
    if(fetching) {

        // user not logged in
    } else if (!data?.me) {

          body = null
        // user logged in
    } else {
     // props.onLoggedInHandler(data.me.username);
    body = (
        <div className="username">
            <img className="images" alt="username" src={window.location.origin + '/assets/username.png'}/>
            <span>Hi  {data.me.username}</span> 
            <button onClick={ () => logout()} disabled={logoutFetching}>Logout</button> 
            
        </div> 
    );

    }
        return(
            <div className="header">
               {props.children}
               {body}
            </div>
        );

}

export default Header;
