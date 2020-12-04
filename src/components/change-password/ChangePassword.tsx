import { TextField } from 'material-ui';
import React, { useState } from 'react';
import { toErrorMap } from '../../utils/toErrorMap';
import { Link, RouteComponentProps } from 'react-router-dom';
import {useChangePasswordMutation} from "../../generated/graphql";




const ChangePassword: React.FC<RouteComponentProps> = ({...props}) => {
    const [, changePassword] = useChangePasswordMutation();
    const [newPassword, setNewPassword] = useState('');
    const [tokenError, setTokenError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

     const onSubmit = async (e: any) => {
        e.preventDefault();
        const token = getLastItem(window.location.pathname)
        const response = await changePassword({newPassword: newPassword, token: token});

        if(response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
             if('token' in errorMap) { 
                setError(errorMap.token);
             } 
               if('newPassword' in errorMap) {
                setError(errorMap.newPassword);
             }
              
        }  else if(response.data?.changePassword.user.id) {
            //worked
            console.log("worked", response)
            props.history.push('/');
        }  
        
    }   
     const change = (e: any) => {
         setNewPassword(e.target.value);
       }

 

    return(
       <div>
           token is: {getLastItem(window.location.pathname)} 
    
         <form>
                 <TextField
                    name="newPassword"
                    hintText="newPassword"
                    floatingLabelText="New Password"
                    type= 'password'
                    value={newPassword}
                    onChange={(e: any) => change(e)}
                    errorText={error}
                    floatingLabelFixed
                />
                 {error ? <Link to="/forgot-password">go and get a new token </Link> : null}
                 <br />

                <button type="submit" onClick={onSubmit}>Change password</button>
        </form>
            
            </div>
    );

};


export default ChangePassword;
