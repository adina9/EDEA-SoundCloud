import React from 'react';
import { Loading } from './Loading';
import { TrackPreview } from './TrackPreview';

export const TrackList = ({ tracks, isTile, onChooseTrack }) => {
    if (!tracks.length) return <Loading />
    return (
        <div className={`track-list flex col pos r ${isTile ? 'tile' : ''}`}>
            {tracks.map((track, idx) => <TrackPreview onChooseTrack={onChooseTrack} key={idx} track={track} />)}
        </div>
    );
};
