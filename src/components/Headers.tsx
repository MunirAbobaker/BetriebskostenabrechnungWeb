import * as React from "react";

interface HeaderProps {
  children: any;
  userLoggedin: string;
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className="header">
      {props.children}
      {props.userLoggedin ? (
        <div className="username">
          <img
            className="images"
            alt="username"
            src={window.location.origin + "/assets/username.png"}
          />
          <span>Hi {props.userLoggedin}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
