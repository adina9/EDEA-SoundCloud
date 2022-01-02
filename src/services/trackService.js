import Axios from 'axios'
import { asyncStorageService } from './async-storage.service'

var axios = Axios.create({
    withCredentials: false
})

var gTracks = []

const TRACK_KEY = 'trackDB'
const SEARCH_KEY = 'searchDB'

export const trackService = {
    query,
    choose,
    querySearches,
    saveSearch
}

async function query(q) {

    // const searches=await saveSearch
    var storageArr = await asyncStorageService.query(TRACK_KEY)
    if (storageArr.length) {
        let accArr = storageArr.reduce((acc, track) => {
            if (track.key.includes(q)) acc.push({ ...track })
            return acc
        }, [])
        if (accArr.length >= 6) {
            return Promise.resolve(accArr)
        } else {
            const { data } = await axios.get(`https://api.mixcloud.com/search/?q=${q}&type=cloudcast`)
            gTracks.push(...data.data)
            asyncStorageService.postMany(TRACK_KEY, gTracks)
            return Promise.resolve(gTracks)
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

async function querySearches() {
    try {
        const searches = await asyncStorageService.query(SEARCH_KEY)
        return Promise.resolve(searches)
    } catch (err) {
        console.log('err in trackAction in loadSearches:', err);
    }
}

async function choose(track) {
    return Promise.resolve(await asyncStorageService.get(TRACK_KEY, track.key))
}

async function saveSearch(search) {
    return Promise.resolve(await asyncStorageService.post(SEARCH_KEY, search))
}