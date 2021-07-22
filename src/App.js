// eslint-disable-next-line
import './App.css';
import { Link, Route, Switch, useHistory } from "react-router-dom";


import Login from "./Login";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route path="/main"> 찐 메인</Route>
        <Route path="/side"> 아이디 고르는 창</Route>

      </Switch>
    </div>
  );
}

export default App;
