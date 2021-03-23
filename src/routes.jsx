import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserActionsPage from "./pages/UserActionsPage";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/atracador-actions" render={props => <UserActionsPage {...props} user='Atracador' actionType='Solicitar Edição' />} />
    </BrowserRouter>
  );
};

export default Routes;
