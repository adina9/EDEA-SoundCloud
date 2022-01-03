import React from 'react';

export const TrackPlayer = ({ track, isDarkMode }) => {

    return (
        <div className="track-player">
            <iframe className='iframe-player' width="100%" src={`https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com${track.key}&hide_cover=2&hide_artwork=1&light=${!isDarkMode}`} frameBorder="0"
            ></iframe>
        </div>
    );
};
