// eslint-disable-next-line
import './App.css';
import { Route, Switch } from "react-router-dom";


import Login from "./Login";
import ManageProfiles from "./ManageProfiles";


function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img src="img/logo.png" width="100px" onClick={()=>{}}></img>
      </div>
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route path="/main"> 찐 메인</Route>
        <Route path="/ManageProfiles"><ManageProfiles/></Route>

      </Switch>
    </div>
  );
}

export default App;
