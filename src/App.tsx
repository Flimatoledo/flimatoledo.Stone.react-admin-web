import { LoginApp } from "./components/Login/LoginApp";
import { Dashboard } from "./dashboard";
import { GlobalStyle } from "./styles/globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaciliStoneProvider } from "./FaciliStoneContext";
import { Users } from "./components/Users/Users";
import { Cards } from "./components/Cards/Cards";
import { Audits } from "./components/Audits/Audits";
import { Sidebar } from "./components/SideBar/Sidebar";

function App() {
  return (
    <FaciliStoneProvider>
      <Router>
        <GlobalStyle />
        <LoginApp />
        <Sidebar />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/users" exact component={Users} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/audits" exact component={Audits} />
      </Router>
    </FaciliStoneProvider>
  );
}

export default App;
