import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
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
      </Switch>
    </Router>
  );
}

export default App;
