import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//icons:
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';

//actions:
import { loadSearches, setLastSearch } from "../store/actions/trackAction";

//cmps:
import { BtnsControl } from '../cmps/BtnsControl';
import { NoResults } from '../cmps/NoResults';


export const RecentSearches = ({ history: { push } }) => {

    const [currSearches, setCurrSearches] = useState([])

    const { searches } = useSelector(state => state.trackModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSearches())
        setCurrSearches(searches.slice(0, 5))
    }, [])

    const researchTrack = (search) => {
        const isIncluded = searches.find(_s => _s === search)
        dispatch(setLastSearch(isIncluded, search))
        push('/')
    }

    const onBackOrNext = (val) => {
        var _searches
        if (val) {
            const lastIdx = searches.indexOf(currSearches[currSearches.length - 1]) + 1
            _searches = searches.slice(lastIdx, lastIdx + 5)
        } else {
            const lastIdx = searches.indexOf(currSearches[0])
            _searches = searches.slice(lastIdx - 5, lastIdx)
        }
        if (_searches.length) setCurrSearches(_searches)
        else return
    }

    return (
        !searches.length ? <NoResults txt='no recent searches yet...' icon={<EventNoteRoundedIcon />} />
            :
            <div className='recent-searches flex col'>
                <p>Your searches</p>
                {currSearches.map((search, idx) => <div className='search-preview' onClick={() => researchTrack(search)}
                    key={idx}>
                    <SearchRoundedIcon />
                    {search}</div>)}
                <BtnsControl backOrNext={onBackOrNext} isOnMainPage={false} />
            </div>
    );
};
