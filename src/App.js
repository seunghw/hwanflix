// eslint-disable-next-line
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import ManageProfiles from "./ManageProfiles";
import UserProfiles from "./UserProfiles";
import Movies from "./Movies";
import Data from "./data.js";
import { useState } from "react";
import MovieDetail from "./component/views/MovieDetail/MovieDetail";
import Navbar from "./common/Navbar";

function App() {
  let [data, setdata] = useState(Data);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          {" "}
          <Login data={data} />{" "}
        </Route>
        <Route exact path="/movie">
          {" "}
          <Movies />
        </Route>
        <Route path="/movie/:movieId">
          {" "}
          <MovieDetail />
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
