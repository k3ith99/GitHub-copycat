import React from 'react';
import { Switch, Route } from "react-router-dom";
import { NavBar} from './components';
import { About, Home, Search  } from './pages';
import { Footer } from './layout';

import './App.css';

function App() {
  return (
    <>
     <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/search"><Search /></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
