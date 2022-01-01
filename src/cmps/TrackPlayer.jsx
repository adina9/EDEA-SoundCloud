import React, { useEffect, useRef } from 'react';

export const TrackPlayer = ({ track }) => {

    const iframeRef = useRef(null)
    useEffect(() => {
        iframeRef.current.style.color = 'red'
    }, [])

    return (
        <div className="track-player">
            <iframe ref={iframeRef} width="100%" src={`https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com${track.key}&hide_cover=2&hide_artwork=1&light=true`} frameBorder="0"></iframe>
        </div>
    );
};
