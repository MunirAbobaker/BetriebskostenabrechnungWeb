import { TextField } from 'material-ui';
import React from 'react';
import { useForgotPasswordMutation } from '../../generated/graphql';

const ForgotPassword: React.FC<{}> = ({}) => {
    const [, forgotPassword] = useForgotPasswordMutation();
    const [email, setEmail] = React.useState('');
     const [complete, setComplete] = React.useState(false); 

    const onSubmit = async (e: any) => {
        e.preventDefault();
        await forgotPassword({email});
        setComplete(true);
         
    };

    const change = (e: any) => {
            setEmail(e.target.value);

    };
   return(
       <>
           {!complete ?
           <div>
            <h1>Forgot Password</h1>
            <>
           <form>
                 <TextField
                    name="email"
                    hintText="email"
                    floatingLabelText="email"
                    value={email}
                    type="email"
                    onChange={(e: any) => change(e)}
                    floatingLabelFixed
                />
                 <br />
                <button type="submit" onClick={onSubmit}>send Email</button>
        </form>
        </>
         </div> 
         : 
         <h1>we sent you a message, check your email</h1>}
        
       </>
   );
}

export default ForgotPassword;