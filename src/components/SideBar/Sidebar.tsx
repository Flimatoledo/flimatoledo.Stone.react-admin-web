import { Flex, TextSpan, NavSide, Button } from "./styleSidebar";
import { Link, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import { FaciliStoneContext } from "../../FaciliStoneContext";


export function Sidebar() {
  const { handleSideBar, user, logOut } = useContext(FaciliStoneContext);

  return user.auth ? (
    <NavSide>
      <Flex>
        facili
        <TextSpan>Stone.</TextSpan>
      </Flex>

      <div className="buttons-container">
        <Link to="/users">
          <Button onClick={handleSideBar}>Usuários</Button>
        </Link>
        <Link to="/cards">
          <Button onClick={handleSideBar}>Cartões</Button>
        </Link>
        <Link to="/audits">
          <Button onClick={handleSideBar}>Auditoria</Button>
        </Link>
      </div>

      <div className="logout">
        <p>{user.email}</p>
        <button onClick={logOut}>Logout</button>
      </div>
    </NavSide>
  ) : (
    <Redirect to="/" />
  );
}
