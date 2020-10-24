import React from 'react';
/* Import components */
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
/* Import Styles */
import './styles/App.css';
/* Import additional libraries */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*

I want to have a space feel to this, I want it to be out of this world something I can be proud of something that feels like the future.

Points to consider:
1. Display animations
2. Spacey background
3. Background music soft

*/
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
