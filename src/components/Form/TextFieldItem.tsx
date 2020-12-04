import React, {FunctionComponent, useState} from "react";
import TextField from "material-ui/TextField";

interface TextFieldItemProps {
    name: string;
    hintText: string;
    floatingLabelText: string;
    value: string;
    errorText: string;
    onChange: (e: any) => void
   floatingLabelFixed: any
}

const TextFieldItem: FunctionComponent<TextFieldItemProps> = (props) => {

    const [value, setValue] = useState('');
    const [error, seterror] = useState('');

   const onChangeHandler = (e) => {
       setValue(e.target.value);
       props.onChange(e);

    }
        return (
            <h1>hello</h1>
            // <TextField
            //     name={props.name}
            //     hintText={props.hintText}
            //     floatingLabelText={props.floatingLabelText}
            //     value={value}
            //     errorText={error}
            //     onChange={(e: any) => onChangeHandler(e)}
            //     floatingLabelFixed={props.floatingLabelFixed}
            // />
        )
}

export default TextFieldItem;
