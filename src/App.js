import './App.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DetailsPage from './Components/DetailsPage'
import CounterReducer from './Store/reducers/CounterReducer';
import ConterContainer from './Components/ConterContainer';

const store=createStore(CounterReducer)
function App() {
  return (
<>
<Provider store={store}>
<Header/>
<ConterContainer/>
      <Router> 
        <Switch>
          
          <Route exact path="/bots-details/:id" component={DetailsPage}/>
        </Switch>

      </Router>
</Provider>
     
     
</>
  );
}

export default App;
