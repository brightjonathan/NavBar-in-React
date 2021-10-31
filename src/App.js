import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav_bar from './Component/Nav_bar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Report from './Pages/Report'


function App() {
  return (
    <div>
      <Router>
      <Nav_bar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Report" component={Report}/>
        <Route path="/product" component={Product}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
