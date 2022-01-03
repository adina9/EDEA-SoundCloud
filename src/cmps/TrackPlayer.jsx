import React, { useRef } from 'react';

export const TrackPlayer = ({ track }) => {

    const iframeRef = useRef(null)

    return (
        <div className="track-player">
            <iframe name='iframeId' id="iframeId" className='iframe-player' ref={iframeRef} width="100%" src={`https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com${track.key}&hide_cover=2&hide_artwork=1&light=false`} frameBorder="0"
                style={{ backgroundColor: 'none' }}></iframe>
        </div>
    );
};
