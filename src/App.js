import { Result } from "antd";
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import withAuth from './components/withAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withAuth(Home)} />
        <Route exact path="/profile" component={withAuth(Profile)} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/">Back Home</Link>}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
