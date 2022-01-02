import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryTracks, loadSearches, saveSearch, setLastSearch } from "../store/actions/trackAction";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
// import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import { Link } from 'react-router-dom';

export const RecentSearches = ({ history: { push } }) => {

    const { searches } = useSelector(state => state.trackModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSearches())
        console.log('searches:', searches);
    }, [])

    const researchTrack = (search) => {
        // dispatch(queryTracks(search))
        const isIncluded = searches.find(_s => _s === search)
        dispatch(setLastSearch(search, isIncluded))
        push('/')
    }
    //no need to save the search in searches in state cause i already into this list
    return (
        !searches.length ? <div className="no-search flex col pos a j-between a-center">
            <EventNoteRoundedIcon />
            <p>no recent searches yet...</p>
            <Link to='/' className="back-to-tracks flex a-center">
                <small>back to tracks</small>
            </Link>
        </div> :
            <div className='recent-searches flex col'>
                {searches.map((search, idx) => <div className='search-preview' onClick={() => researchTrack(search)}
                    key={idx}>
                    <SearchRoundedIcon />
                    {search}</div>)}
            </div>
    );
};
