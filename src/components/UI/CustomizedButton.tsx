import React from "react";
import { ThemeConsumer } from "styled-components";

import Button from "../../helpers/Button";

interface CustomizedButtonProps {
  onClick: any;
  class?: any;
  type: any;
}

const CustomizedButton: React.FC<CustomizedButtonProps> = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="primary"
          className={props.class}
          type={props.type}
          onClick={props.onClick}
        >
          {props.children}
        </Button>
      )}
    </ThemeConsumer>
  );
};

export default CustomizedButton;
