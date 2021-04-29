import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SeekPage from "./components/SeekPage/index";
import SpotPage from "./components/SpotPage/index";
import Homepage from "./components/Homepage/index";
import Profile from '../../frontend/src/components/Profile'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/spots/:id">
            <SpotPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/spots">
            <SeekPage />
          </Route>
          <Route path="/spots/:id">
            <SpotPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
