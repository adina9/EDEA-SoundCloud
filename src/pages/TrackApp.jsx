import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearch } from "../cmps/AppSearch";
import { BtnsControl } from "../cmps/BtnsControl";
import { TrackList } from "../cmps/TrackList";
import { queryTracks, chooseTrack, saveSearch } from "../store/actions/trackAction";
import { Switch, Route, Link } from 'react-router-dom'
import { TrackDetails } from './TrackDetails';
import { RecentSearches } from './RecentSearches';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import searchList from '../assets/imgs/searchList.png'
// import svgSearchIcon from '../assets/imgs/searchList.svg'

// import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import YoutubeSearchedForRoundedIcon from '@material-ui/icons/YoutubeSearchedForRounded';

export const TrackApp = ({ history: { push } }) => {

    const [currTracks, setCurrTracks] = useState([])
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    const dispatch = useDispatch()
    const { tracks, currTrack, searches } = useSelector(state => state.trackModule)
    const { isTile } = useSelector(state => state.prefsModule)

    useEffect(() => {
        dispatch(queryTracks())
    }, [])

    useEffect(() => {
        if (currTrack) push(`/track/${currTrack.key.substr(1)}`)
        if (tracks?.length) setCurrTracks(tracks.slice(0, 6))
        if (isSearchClicked) push('/searches')
    }, [currTrack, tracks, isSearchClicked])


    const onQueryTracks = async (searchBy) => {
        dispatch(queryTracks(searchBy))
        if (!searches.includes(searchBy)) dispatch(saveSearch(searchBy))
    }

    const onChooseTrack = async (track) => {
        dispatch(chooseTrack(track))
    }


    const onBackOrNext = (val) => {
        const lasdIdx = tracks.indexOf(val ? currTracks[currTracks.length - 1] : currTracks[0])
        setCurrTracks(tracks.slice(val ? lasdIdx + 1 : lasdIdx - 6, val ? lasdIdx + 7 : lasdIdx))
    }

    return (
        <section className="track-app flex a-center col pos r">
            {currTrack && <ArrowForwardIcon className="back-arrow" onClick={() => {
                // dispatch(chooseTrack(null))
                push('/')
            }} />}
            <AppSearch onSearch={onQueryTracks} />
            <Link to='/searches'><YoutubeSearchedForRoundedIcon className="search-icon pos a" onClick={() => setIsSearchClicked(true)} /></Link>
            {!currTrack && !isSearchClicked && <TrackList tracks={currTracks} isTile={isTile} onChooseTrack={onChooseTrack} />}
            <Switch>
                <Route path='/searches' component={RecentSearches} />
                <Route path="/track/:key" component={TrackDetails} />
            </Switch>
            {!currTrack && <BtnsControl backOrNext={onBackOrNext} />}
        </section>
    )
}