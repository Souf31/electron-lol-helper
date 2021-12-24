import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from './components/Side/SideBar';
import MultiSearch from './components/Main/MultiSearch';
import InGame from './components/Main/InGame';
import Champion from './components/Main/Champion';


export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={MultiSearch} />
        <Route path="/Champion" component={Champion} />
        <Route path="/InGame" component={InGame} />
      </Switch>
      <SideBar/>
    </Router>
  );
}
