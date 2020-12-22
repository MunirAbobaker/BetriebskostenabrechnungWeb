import * as React from "react";

interface CheckboxProps {
    id: string;
    checkboxHandler: any;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = React.memo((props) => {
           

    const [checked, setChecked] = React.useState(false);

    const checkboxHandler = () => {
        const value = !checked;
        setChecked(value);
        props.checkboxHandler(props.id, value);
    };

  
        return (
            <li className={"list-item sectionItem"}>
                <div className={"sectionItem"}>
                    <input id={props.name} type="checkbox" name={props.name}
                           checked={checked}
                           onChange={checkboxHandler}/>
                    <label htmlFor={props.name}> <span>{props.name} </span></label>
                </div>
            </li>
        );
});

export default Checkbox;
