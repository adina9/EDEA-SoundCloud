import React, { useRef } from 'react';

export const TrackPlayer = ({ track }) => {

    const iframeRef = useRef(null)
    
    return (
        <div className='track-player'>
            <iframe ref={iframeRef} src={`https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com${track.key}&hide_cover=2&hide_artwork=1&light=true`} frameborder="0"></iframe>
        </div>
    );
};
