import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import AddDoctor from "./components/pages/AddDoctor"
import TopDoctors from "./components/pages/TopDoctors"
import MenuBar from "./components/pages/MenuBar";


function App() {
  return (
    <Router>
       <MenuBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topdoctors" exact component={TopDoctors} />
          <Route path="/adddoctor" exact component={AddDoctor} />
          
          
          <Route />
        </Switch>
      </Router>
  );
}

export default App;
