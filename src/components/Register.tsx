import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TextField from "material-ui/TextField";
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';


const Register: React.FC<RouteComponentProps> = ({...props}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [, register] = useRegisterMutation();
    const [passwordError, setPasswordError] = useState('');
    const [UserError, setUserError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log("register called")
        const response = await register({firstName, lastName, email,  username, password, address});
        if(response.data?.register.errors) {
            console.log("not working", response.data?.register.errors )
            const error = toErrorMap(response.data.register.errors);
            if(error.username) {
                console.log("not working username", error)
                setUserError(error["username"])
            } else if(error.password) {
                console.log("not working password")
                setPasswordError(error["password"])
            }
        }  else if(response.data?.register.user) {
            //worked
            console.log("worked", response)
            props.history.push('/');
        }
    
    };

    const change = (e: any) => {
        if(e.target.name === "firstName") {
            setFirstName(e.target.value);
        }

        if(e.target.name === "lastName") {
            setLastName(e.target.value);
        }
        
        if(e.target.name === "email") {
            setEmail(e.target.value);
        }
        
        if(e.target.name === "username") {
            setUsername(e.target.value);
        }
        if(e.target.name === "password") {
            setPassword(e.target.value);
        }

        if(e.target.name === "address") {
            setAddress(e.target.value);
        }
    };
      
    return(
        <form>
             <TextField
                    name="firstName"
                    hintText="First name"
                    floatingLabelText="First name"
                    value={firstName}
                    onChange={(e: any) => change(e)}
                    errorText={firstNameError}
                    floatingLabelFixed
                />
                 <br />
                 <TextField
                    name="lastName"
                    hintText="last name"
                    floatingLabelText="Last name"
                    value={lastName}
                    onChange={(e: any) => change(e)}
                    errorText={lastNameError}
                    floatingLabelFixed
                />
                 <br />
                 <TextField
                    name="email"
                    hintText="email"
                    floatingLabelText="email name"
                    value={email}
                    onChange={(e: any) => change(e)}
                    errorText={emailError}
                    floatingLabelFixed
                />
                 <br />

                 <TextField
                    name="username"
                    hintText="username"
                    floatingLabelText="Username"
                    value={username}
                    onChange={(e: any) => change(e)}
                    errorText={UserError}
                    floatingLabelFixed
                />
                 <br />
                <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    value={password}
                    onChange={(e: any) => change(e)}
                    errorText={passwordError}
                    type="password"
                    floatingLabelFixed
                />
                  <br />

                  <TextField
                    name="address"
                    hintText="Address"
                    floatingLabelText="Address"
                    value={address}
                    onChange={(e: any) => change(e)}
                    errorText={""}
                    floatingLabelFixed
                />
                  <br />
                <button type="submit" onClick={onSubmit}>Register</button>
        </form>

    );
}

export default Register;
