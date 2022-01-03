import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TrackPlayer } from '../cmps/TrackPlayer'
import { NoResults } from '../cmps/NoResults';
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import { Link } from 'react-router-dom';

export const TrackDetails = () => {

    const [isImageClicked, setIsImageClicked] = useState(false)
    const { currTrack } = useSelector(state => state.trackModule)

    if (!currTrack) return <NoResults
        txt='No track has been choosed'
        icon={<AudiotrackRoundedIcon />}
    />

    return (
        <div className='track-details flex col j-around'>
            <Link to='/'><KeyboardBackspaceRoundedIcon /></Link>
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
