import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearches } from '../store/actions/trackAction';
import { queryTracks, chooseTrack, saveSearch } from "../store/actions/trackAction";


export const RecentSearches = ({ history: { push } }) => {

    const { searches } = useSelector(state => state.trackModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSearches())
    }, [])

    const researchTrack = (search) => {
        // dispatch((search)),
        push('/')
    }

    return (
        !searches.length ? <h1>No searches yet...</h1> :
            <div className='recent-searches flex col'>
                {searches.map((search, idx) => <div onClick={() => researchTrack(search)}
                    key={idx}>{search}</div>)}
            </div>
    );
};
