import { Switch, Route } from 'react-router-dom'
import { TrackApp } from './pages/TrackApp';
import { HashRouter as Router } from 'react-router-dom'


export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={TrackApp} />
        </Switch>
      </Router>
    </div>
  );
}


