import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import NotFound from "./pages/notfound";
import Profile from "./pages/Profile";
import Resume from './pages/Resume';

const App = () =>  {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          element={<Home />}
         />
        <Route
          exact
          path="/resume"
          element={<Resume />}
         />
        <Route
          exact
          path="/about"
          element={<Profile />}
         />
          <Route
          // exact
            path="*"
            element={<NotFound />}
         />
      </Switch>
    </Router>
  );
}

export default App;
