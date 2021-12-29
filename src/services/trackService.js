import Axios from 'axios'
import { asyncStorageService } from './async-storage.service'

var axios = Axios.create({
    withCredentials: false
})

var gTracks = []

const TRACK_KEY = 'trackDB'

export const trackService = {
    query,
    choose
}

async function query(q) {
    console.log('q:', q)
    var storageArr = await asyncStorageService.query(TRACK_KEY)
    if (storageArr.length) {
        let accArr = storageArr.reduce((acc, track) => {
            if (track.key.includes(q)) acc.push({ ...track })
            return acc
        }, [])
        if (accArr.length >= 6) {
            console.log('accArr:', accArr)
            return Promise.resolve(accArr)
        }
    }
    else {
        const { data } = await axios.get(`https://api.mixcloud.com/search/?q=${q}&type=cloudcast`)
        gTracks.push(...data.data)
        console.log('storageArr after call:', gTracks)
        asyncStorageService.postMany(TRACK_KEY, gTracks)
        return Promise.resolve(gTracks)
    }
}

async function choose(track) {
    return Promise.resolve(await asyncStorageService.get(TRACK_KEY, track.key))
}