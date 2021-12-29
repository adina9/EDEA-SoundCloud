import React from 'react';
import { Loading } from './Loading';
import { TrackPreview } from './TrackPreview';

export const TrackList = ({ tracks, onChooseTrack }) => {
    console.log(onChooseTrack);
    console.log('track 2345678:', tracks);
    if (!tracks.length) return <Loading />
    return (
        <div className='track-list flex col'>
            {tracks.map((track, idx) => <TrackPreview onChooseTrack={onChooseTrack}  key={idx} track={track} />)}
        </div>
    );
};
