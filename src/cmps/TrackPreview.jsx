import React from 'react';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

export const TrackPreview = ({ track, onChooseTrack }) => {
    return (
        <div className='track-preview flex a-center j-center' onClick={async () => await onChooseTrack(track)}>
            <AudiotrackIcon />
            <h6>{track.name}</h6>
        </div>
    );
};
