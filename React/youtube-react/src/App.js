import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './pages/Search';
import Top from './pages/Top';
import Watch from './pages/Watch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/watchddddddd" component={Watch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
