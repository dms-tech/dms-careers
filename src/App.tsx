import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Careers from "./pages/Careers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/about/careers" component={Careers} />
      </BrowserRouter>
    </div>
  );
}

export default App;
