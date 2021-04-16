import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loader } from "./components/Loader";
// import { Home } from "./pages";

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <Suspense fallback={<Loader show />}>
              <Home {...routeProps} />
            </Suspense>
          )} />
      </Switch>
    </Router>
  );
}

export default App;
