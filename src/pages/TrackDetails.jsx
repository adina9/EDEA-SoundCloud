import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//icons:
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

//cmps:
import { TrackPlayer } from '../cmps/TrackPlayer'
import { NoResults } from '../cmps/NoResults';

export const TrackDetails = () => {

    const [isImageClicked, setIsImageClicked] = useState(false)
    const { currTrack } = useSelector(state => state.trackModule)
    const { isDarkMode } = useSelector(state => state.prefsModule)

    if (!currTrack) return <NoResults
        txt='No track has been choosed'
        icon={<AudiotrackRoundedIcon />}
    />
    //IMPORTANT: currTrack is not being saved in the localstorage

    return (
        <div className='track-details flex col j-around'>
            <Link to='/' className='details-link'><KeyboardBackspaceRoundedIcon /></Link>
            <div className="imgs-container flex a-center j-between">
                {[...Array(3)].map((_, idx) =>
                    <img onClick={idx === 1 ? () => setIsImageClicked(true) : ''} src={idx !== 1 ? currTrack.pictures.medium : currTrack.pictures.large} alt={currTrack.name} />)}
            </div>
            {isImageClicked ?
                <TrackPlayer track={currTrack} isDarkMode={isDarkMode} />
                : <div className='click-img-elmnt'><p>click the central image to turn on the music</p></div>
            }
        </div>
    );
};
