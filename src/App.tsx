import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const SynthKeyboard = React.lazy(() => import("./SynthKeyboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Synth Keyboard</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <SynthKeyboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
