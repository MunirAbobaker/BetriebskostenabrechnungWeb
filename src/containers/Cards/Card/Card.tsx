import React, { Component } from "react";
import { Link } from "react-router-dom";
const path = require("path");
import { useLogoutMutation } from "../../../generated/graphql";

interface CardProps {
  cardInfos: any;
  userLoggedIn: string;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  const onlogoutHandler = () => {
    logout();
  };
  return (
    <div key={props.cardInfos.id} className={"cardTest"}>
      {props.cardInfos.id === "logout" ? (
        <>
          <img
            className={"images"}
            alt={props.cardInfos.title}
            src={
              window.location.origin + "/assets/" + props.cardInfos.id + ".png"
            }
          />

          {props.userLoggedIn && props.cardInfos.id === "register" ? (
            <h3 className={"text"}>{props.cardInfos.title}</h3>
          ) : (
            <a role="button" onClick={() => onlogoutHandler()}>
              <h3 className={"text"}>{props.cardInfos.title}</h3>
            </a>
          )}
        </>
      ) : (
        <Link
          to={"/" + props.cardInfos.id}
          className={
            props.userLoggedIn && props.cardInfos.id === "register"
              ? "NotClickable"
              : ""
          }
        >
          <img
            className={"images"}
            alt={props.cardInfos.title}
            src={
              window.location.origin + "/assets/" + props.cardInfos.id + ".png"
            }
          />
          <h3 className={"text"}>{props.cardInfos.title}</h3>
        </Link>
      )}
    </div>
  );
};

export default Card;
