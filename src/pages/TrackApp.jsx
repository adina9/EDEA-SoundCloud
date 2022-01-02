import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearch } from "../cmps/AppSearch";
import { BtnsControl } from "../cmps/BtnsControl";
import { TrackList } from "../cmps/TrackList";
import { queryTracks, chooseTrack, saveSearch } from "../store/actions/trackAction";
import { Switch, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { TrackDetails } from './TrackDetails';
import { RecentSearches } from './RecentSearches';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import searchList from '../assets/imgs/searchList.png'
// import svgSearchIcon from '../assets/imgs/searchList.svg'

// import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import YoutubeSearchedForRoundedIcon from '@material-ui/icons/YoutubeSearchedForRounded';
import { setMode } from "../store/actions/prefsAction";

export const TrackApp = ({ history: { push } }) => {

    const [currTracks, setCurrTracks] = useState([])

    var { pathname } = useLocation()

    const dispatch = useDispatch()
    const { tracks, currTrack, searches, lastSearch } = useSelector(state => state.trackModule)
    const { isDarkMode, isTile } = useSelector(state => state.prefsModule)

    useEffect(() => {
        dispatch(queryTracks(lastSearch))
        setCurrTracks(tracks.slice(0, 6))
    }, [lastSearch])

    useEffect(() => {
        if (currTrack) push(`/track/${currTrack.key.substr(1)}`)
        if (tracks?.length) setCurrTracks(tracks.slice(0, 6))
    }, [currTrack, tracks])


    const onQueryTracks = async (searchBy) => {
        dispatch(queryTracks(searchBy))
        // if()
        // dispatch(saveSearch(searches.includes(searchBy), searchBy))
    }

    const onChooseTrack = async (track) => {
        dispatch(chooseTrack(track))
    }

    const onBackOrNext = (val) => {
        const lasdIdx = tracks.indexOf(val ? currTracks[currTracks.length - 1] : currTracks[0])
        setCurrTracks(tracks.slice(val ? lasdIdx + 1 : lasdIdx - 6, val ? lasdIdx + 7 : lasdIdx))
    }

    const isOnMainPage = () => pathname.length === 1

    
    return (
        <section className="track-app flex a-center col pos r">
            {/* <Link to='/'><ArrowForwardIcon className="back-arrow" /></Link> */}
            {isOnMainPage() && <AppSearch onSearch={onQueryTracks} lastSearch={lastSearch} />}
            <NavLink to='/searches' activeClassName="isOnSearch"><YoutubeSearchedForRoundedIcon titleAccess='Your last searches' className="search-icon pos a" /></NavLink>
            {!currTrack && isOnMainPage() && < TrackList tracks={currTracks} isTile={isTile} onChooseTrack={onChooseTrack} />}
            <Switch>
                <Route path='/searches' exact component={RecentSearches} />
                <Route path="/track/:key" component={TrackDetails} />
            </Switch>
            {!currTrack && isOnMainPage() && <BtnsControl backOrNext={onBackOrNext} />}

        </section>
    )
}