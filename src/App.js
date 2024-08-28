import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Remidiationtickets } from "./pages/remiditaion-tickets/Remidiation_tickets";
import { RegressionSuites } from "./pages/regression-suites/RegressionSuites";
import { SecurityGroups } from "./pages/securityGroups/SecurityGroups";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="api-inventory">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="remidiation-tickets">
              <Route index element={<Remidiationtickets />} />
            </Route>
            <Route path="regression-suites">
              <Route index element={<RegressionSuites />} />
            </Route>
            <Route path="security-groups">
              <Route index element={<SecurityGroups />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
