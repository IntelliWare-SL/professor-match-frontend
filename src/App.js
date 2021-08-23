import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Home/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import SignInPage from './pages/SignIn/SignInPage';
import SignUpPage from './pages/Signup/SignUpPage';
import ProfessorCompleteProfilePage from './pages/ProfessorCompleteProfile/ProfessorCompleteProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/sign-up/:type" component={SignUpPage} />
          <Route
            exact
            path="/complete-profile/professor"
            component={ProfessorCompleteProfilePage}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
