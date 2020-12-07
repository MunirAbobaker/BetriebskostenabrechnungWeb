import * as React from 'react';
import { Link } from 'react-router-dom';
import TextField from "material-ui/TextField";


const Form: React.FC<{}> = ({...props}) => {

    
    const onSubmit = async (e: any) => {
        e.preventDefault();
        
    };

    const change = (e: any) => {
        

        if(e.target.name === "email") {
           
        }
        
        if(e.target.name === "password") {
            
        }

    };
      
    return(
        <form>
                 <TextField
                    name="email"
                    hintText="email"
                    floatingLabelText="email"
                    value={""}
                    onChange={(e: any) => change(e)}
                    errorText={""}
                    floatingLabelFixed
                />
                 <br />


                <button type="submit" onClick={onSubmit}>Login</button>
        </form>

    );
}

export default Form;
