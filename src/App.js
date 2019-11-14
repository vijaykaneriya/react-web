
import React  from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Blog from './container/blog/blog';
import Register from './components/register/register';
import Login from './components/login/login';
import ForgotPassword from './components/login/forgotpassword';
import Header from './container/header';

import './App.css';
import './bootstrap.min.css';


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Header/>
          
          <div className="container">
            <Route  exact path="/" />
            <Route  exact path="/login" component={Login} />
            <Route  exact path="/register" component={Register} />
            <Route  exact path="/blog" component={Blog} />
            <Route  exact path="/ForgotPassword" component={ForgotPassword} />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}



export default App;