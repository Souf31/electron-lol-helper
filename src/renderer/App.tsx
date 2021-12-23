import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from './components/Side/SideBar';


const Hello = () => {
  return (
    <div >
      <Header/>
      <SideBar/>
    </div>

  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
