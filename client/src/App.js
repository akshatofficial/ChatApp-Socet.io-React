import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./Components/Chat";
import Join from "./Components/Join";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route
          path="/chat"
          //exact ----> We are not using this because we are passing data from the link(url) itself
          //Like /chat?name="Akshat"&room="Developers"
          component={Chat}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
