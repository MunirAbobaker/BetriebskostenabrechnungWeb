import React from "react";
import { ThemeConsumer } from "styled-components";

import { Form } from "../../helpers/Button";

interface CustomizedButtonProps {
  class?: any;
  variant?: any;
}
//TODO: rm component und directly implementet in Form, for register the same and change vairaint to 
// prevent clicken the componet, choose the other variant option and implement pointer=  notallowed
const StyledForm: React.FC<CustomizedButtonProps> = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Form variant="normal" className={props.class}>
          {props.children}
        </Form>
      )}
    </ThemeConsumer>
  );
};

export default StyledForm;
