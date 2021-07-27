// eslint-disable-next-line
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ManageProfiles from "./ManageProfiles";
import Data from "./data.js";
import { useState } from 'react';

function App() {

  let [data, setdata] = useState(Data);

  return (
    <div className="App">
      <div className="Navbar">
        <img src="img/logo.png" width="100px" onClick={()=>{}}></img>
      </div>
      <Switch>
        <Route exact path="/"> <Login data={data}/> </Route>
        <Route path="/main"> 찐 메인</Route>
        <Route path="/ManageProfiles"><ManageProfiles data={data}/></Route>

      </Switch>
    </div>
  );
}

export default App;
