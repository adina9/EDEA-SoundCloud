import { Switch, Route } from 'react-router-dom'
import { useEffect } from "react";
import { TrackApp } from './pages/TrackApp';
import { HashRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadPrefs } from './store/actions/prefsAction';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import { ToggleWrapper } from './cmps/ToggleWrapper';


export const App = () => {

  const dispatch = useDispatch()
  const { isDarkMode } = useSelector(state => state.prefsModule)

  useEffect(() => {
    dispatch(loadPrefs())
  }, [])

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <MusicNoteRoundedIcon className='music-icon pos a' />
      <Router>
        <Switch>
          <Route path='/' component={TrackApp} />
        </Switch>
      </Router>
      <ToggleWrapper value={isDarkMode} onUpdate={() => { }} />

    </div>
  );
}


