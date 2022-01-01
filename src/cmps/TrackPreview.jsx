import React from 'react';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

export const TrackPreview = ({ track, onChooseTrack }) => {
    return (
        <div className='track-preview' onClick={async () => await onChooseTrack(track)}>
            <AudiotrackIcon />
            <img src={track.pictures.medium} alt={track.name} />
            <h6>{track.name}</h6>
        </div>
    );
};
