import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrackPlayer } from '../cmps/TrackPlayer'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

export const TrackDetails = () => {

    const [isImageClicked, setIsImageClicked] = useState(false)


    const { currTrack } = useSelector(state => state.trackModule)

    if (!currTrack) return <h1>No track has been choosed</h1>

    return (
        <div className='track-details flex col j-around'>
            {/* <Link to='/'><ArrowForwardIcon className="back-arrow" /></Link> */}
            <div className="imgs-container flex a-center j-between">
                <img src={currTrack.pictures.medium} alt={currTrack.name} />
                <img onClick={() => setIsImageClicked(true)} src={currTrack.pictures.large} alt={currTrack.name} />
                <img src={currTrack.pictures.medium} alt={currTrack.name} />
            </div>
            {isImageClicked ? 
            <TrackPlayer track={currTrack} /> 
            : <div className='click-img-elmnt'><p>click the central image to turn on the music</p></div>
            }
        </div>
    );
};
