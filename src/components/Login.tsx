import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import TextField from "material-ui/TextField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

const Login: React.FC<RouteComponentProps> = ({ ...props }) => {
  const [, login] = useLoginMutation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await login({ email, password });
    if (response.data?.login.errors) {
      const error = toErrorMap(response.data.login.errors);
      if (error.email) {
        setEmailError(error["email"]);
      } else if (error.password) {
        setPasswordError(error["password"]);
      }
    } else if (response.data?.login.user.id) {
      props.history.push("/");
    }
  };

  const change = (e: any) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <form>
      <TextField
        name="email"
        hintText="email"
        floatingLabelText="email"
        value={email}
        onChange={(e: any) => change(e)}
        errorText={emailError}
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

      <button type="submit" onClick={onSubmit}>
        Login
      </button>
      <Link to="/forgot-password">Forgot Password</Link>
    </form>
  );
};

export default Login;
