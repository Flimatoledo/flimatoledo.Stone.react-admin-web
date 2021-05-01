import { Route } from "react-router";
import { Audits } from "./components/Audits/Audits";
import { Cards } from "./components/Cards/Cards";
import { useContext } from "react";

import { Sidebar } from "./components/SideBar/Sidebar";
import { Users } from "./components/Users/Users";
import { FaciliStoneContext } from "./FaciliStoneContext";

import { Redirect } from "react-router-dom";

export function Dashboard() {
  const { user } = useContext(FaciliStoneContext);

  return user.auth ? (
    <div style={{ display: "grid" }}>
      <Sidebar />
      <div>
        <Route path="/users" exact component={Users} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/audits" exact component={Audits} />
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
