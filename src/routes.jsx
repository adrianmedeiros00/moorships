import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/user" render={props => <User {...props} user='{user}' actionType='Ação do usuário específico' />} />
      <Route path="/forgot-password" component={ForgotPassword}/>
    </BrowserRouter>
  );
};

export default Routes;
