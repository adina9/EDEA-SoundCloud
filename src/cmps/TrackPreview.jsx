import React from 'react';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

export const TrackPreview = ({ track, onChooseTrack }) => {
    return (
        <div className='track-preview' onClick={async () => await onChooseTrack(track)}>
            <AudiotrackIcon />
            <div className='pos a'>
                <img src={track.pictures.medium} alt={track.name} />
            </div>
            <p>{track.name}</p>
        </div>
    );
};
