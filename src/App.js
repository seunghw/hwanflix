// eslint-disable-next-line
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import ManageProfiles from "./ManageProfiles";
import UserProfiles from "./UserProfiles";
import Movies from "./Movies";
import Data from "./data.js";
import { useState } from "react";

function App() {
  let [data, setdata] = useState(Data);
  let history = useHistory();

  return (
    <div className="App">
      <div className="Navbar">
        <img
          src="img/logo.png"
          width="100px"
          onClick={() => {
            history.push("/");
          }}
        ></img>
      </div>
      <Switch>
        <Route exact path="/">
          {" "}
          <Login data={data} />{" "}
        </Route>
        <Route path="/main">
          {" "}
          <Movies />
        </Route>
        <Route path="/ManageProfiles">
          <ManageProfiles data={data} />
        </Route>
        <Route path="/UserProfiles/:id">
          <UserProfiles data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
