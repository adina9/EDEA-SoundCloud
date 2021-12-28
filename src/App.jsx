import {AppHeader} from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';

export function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home}/>
      </Switch>
      <AppFooter/>
    </div>
  );
}


