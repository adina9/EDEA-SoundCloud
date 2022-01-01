import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrackPlayer } from '../cmps/TrackPlayer'

export const TrackDetails = () => {

    const [isImageClicked, setIsImageClicked] = useState(false)

    const dispatch = useDispatch()

    const { currTrack } = useSelector(state => state.trackModule)
    useEffect(() => {
        // dispatch(loadCurrTrack())
        console.log('detialssss');
    }, [])
    console.log('currTrack in details:', currTrack);

    if (!currTrack) return <h1>No track has been choosed</h1>

    return (
        <div className='track-details'>
            <div className="img-container flex a-center j-center">
                <img src={currTrack.pictures.medium} alt={currTrack.name} />
                <img onClick={() => setIsImageClicked(true)} src={currTrack.pictures.large} alt={currTrack.name} />
                <img src={currTrack.pictures.medium} alt={currTrack.name} />
            </div>
            {isImageClicked && <TrackPlayer track={currTrack} />}
        </div>
    );
};
