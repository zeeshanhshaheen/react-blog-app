import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./components/AddPost";
import ViewPost from "./showpost/ViewPost";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={AddPost} />
          <Route exact path="/showpost/:id" component={ViewPost} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
