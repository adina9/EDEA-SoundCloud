import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearch } from "../cmps/AppSearch";
import { BtnsControl } from "../cmps/BtnsControl";
import { TrackList } from "../cmps/TrackList";
import { queryTracks, chooseTrack, setLastSearch } from "../store/actions/trackAction";
import { Switch, Route, NavLink, useLocation } from 'react-router-dom'
import { TrackDetails } from './TrackDetails';
import { RecentSearches } from './RecentSearches';

import YoutubeSearchedForRoundedIcon from '@material-ui/icons/YoutubeSearchedForRounded';
import { loadPrefs } from "../store/actions/prefsAction";

export const TrackApp = ({ history: { push } }) => {

    var { pathname } = useLocation()

    const dispatch = useDispatch()
    const { tracks, currTrack, searches, lastSearch } = useSelector(state => state.trackModule)
    const { isDarkMode, isTile } = useSelector(state => state.prefsModule)

    const [currTracks, setCurrTracks] = useState([])


    useEffect(() => {
        dispatch(queryTracks(lastSearch))
        setCurrTracks(tracks.slice(0, 6))
        dispatch(loadPrefs())
        console.log('pathname', pathname);
        if (pathname.length === 1) dispatch(chooseTrack(null))
    }, [lastSearch, pathname])

    useEffect(() => {
        if (currTrack) push(`/track/${currTrack.key.substr(1)}`)
        if (tracks?.length) setCurrTracks(tracks.slice(0, 6))
    }, [currTrack, tracks])


    const onQueryTracks = async (searchBy) => {
        dispatch(queryTracks(searchBy))
    }

    const onSaveSearch = (search) => {
        dispatch(setLastSearch(searches.includes(search), search))
    }

    const onChooseTrack = async (track) => {
        dispatch(chooseTrack(track))
    }

    const onBackOrNext = (val) => {
        var _tracks
        if (val) {
            const lastIdx = tracks.indexOf(currTracks[currTracks.length - 1]) + 1
            _tracks = tracks.slice(lastIdx, lastIdx + 6)
        } else {
            const lastIdx = tracks.indexOf(currTracks[0])
            _tracks = tracks.slice(lastIdx - 6, lastIdx)
        }
        if (_tracks.length) setCurrTracks(_tracks)
        else return
    }

    const isOnMainPage = () => pathname.length === 1


    return (
        <section className="track-app flex a-center col pos r">
            {isOnMainPage() && <AppSearch onSearch={onQueryTracks} saveSearch={onSaveSearch} lastSearch={lastSearch} />}
            {pathname.length < 10 && <NavLink to='/searches' activeClassName="isOnSearch"><YoutubeSearchedForRoundedIcon titleAccess='Your last searches' className="search-icon pos a" /></NavLink>}
            {!currTrack && isOnMainPage() && < TrackList tracks={currTracks} isTile={isTile} onChooseTrack={onChooseTrack} />}
            <Switch>
                <Route path='/searches' exact component={RecentSearches} />
                <Route path="/track/:key" component={TrackDetails} />
            </Switch>
            {!currTrack && isOnMainPage() && <BtnsControl backOrNext={onBackOrNext} isOnMainPage={true} />}

        </section>
    )
}