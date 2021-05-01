import { FaciliStoneContext } from "../../FaciliStoneContext";
import { FormLogin, Div } from "./styleLoginApp";
import { Redirect } from "react-router-dom";
import { useContext } from "react";

export function LoginApp() {
  const {
    email,
    password,
    inputEmail,
    inputPassword,
    authLogin,
    user,
  } = useContext(FaciliStoneContext);

  return user.auth ? (
    <Redirect to="/dashboard" />
  ) : (
    <Div>
      <FormLogin>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={inputEmail}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={inputPassword}
        />
        <button type="submit" onClick={authLogin()}>
          Login
        </button>
      </FormLogin>
    </Div>
  );
}
