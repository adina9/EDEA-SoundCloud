import React, { useRef } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'


export const TrackPlayer = ({ track }) => {

    const iframeRef = useRef(null)

    useEffect(() => {
        console.log('hello');
        // console.log('iframeRef',iframeRef);
        // // console.log('iframeRef', iframeRef.current.style.backgroundColor);
        // // iframeRef.current.style.backgroundColor = "red"
        // const myIframe = document.getElementById('iframeId')
        // console.log('myIframe', myIframe);
        // // myIframe.contentDocument.querySelector('.widget-header')
        // console.log('myIframe.contentWindow',myIframe.contentWindow);


        // var cssLink = document.createElement('link')
        // cssLink.href = '_TrackPlayer.scss'
        // cssLink.rel = 'stylesheet'
        // cssLink.type = 'scss'
        // console.log('window:', window);
        // // document.body.bgColor
        // // window.frames.document.body.background = 'red'
        // window.frames.document.body.appendChild(cssLink)

        // var iframe = document.getElementById("iframeId");
        // var elmnt = iframe.contentWindow.document.querySelector('.widget-header')
        // console.log('elmnt:', elmnt)
    }, [])
    // https://www.mixcloud.com/mixcloud/meet-the-curators/

    return (
        <div className="track-player">
            <iframe name='iframeId' id="iframeId" className='iframe-player' ref={iframeRef} width="100%" src={`https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com${track.key}&hide_cover=2&hide_artwork=1&light=false`} frameBorder="0"
                style={{ backgroundColor: 'none' }}></iframe>
            {/* <ReactPlayer className='react-player' url={track.url} light="true" /> */}
        </div>
    );
};
