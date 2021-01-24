import * as React from "react";

interface HeaderProps {
  children: any;
  userLoggedin: string;
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className="header">
      {props.children}
    </div>
  );
};

export default Header;
