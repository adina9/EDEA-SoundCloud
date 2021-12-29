import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppSearch } from "../cmps/AppSearch";
import { BtnsControl } from "../cmps/BtnsControl";
import { TrackList } from "../cmps/TrackList";
import { loadTracks, chooseTrack } from "../store/actions/trackAction";
import { NavLink, Switch, Route } from 'react-router-dom'
import { TrackDetails } from './TrackDetails';


export const TrackApp = ({ history: { push } }) => {

    const [currTracks, setCurrTracks] = useState([])

    const dispatch = useDispatch()
    const { tracks, currTrack } = useSelector(state => state.trackModule)

    useEffect(() => {
        if (currTrack) push(`track/${currTrack.key.substr(1)}`)
    }, [currTrack])

    const onQueryTracks = (searchBy) => {
        dispatch(loadTracks(searchBy))
        setCurrTracks(tracks.slice(0, 6))
    }

    const onChooseTrack = async (track) => {
        dispatch(chooseTrack(track))
    }

    const onGoNext = () => {
        console.log('should go next');
        Array.prototype.cycle = function (str) {
            const i = this.indexOf(str);
            if (i === -1) return undefined;
            return this[(i + 1) % this.length];
        };

        //TODO: setCurrTracks with the next 6 tracks. (more - if the final group is less than 6, show 6 from the end)
    }

    return (
        <section className="track-app flex a-center col pos r">
            <AppSearch onSearch={onQueryTracks} />
            {!currTrack && <TrackList tracks={ currTracks} onChooseTrack={onChooseTrack} />}
            <Route path="/track/:key" component={TrackDetails}/>
            {!currTrack && <BtnsControl goNext={onGoNext} />}
        </section>
    )
}