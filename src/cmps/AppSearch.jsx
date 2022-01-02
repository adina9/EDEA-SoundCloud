import React, { useRef, useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';



export const AppSearch = ({ onSearch, style, lastSearch }) => {

    const [searchBy, setSearchBy] = useState('')
    const [searchClass, setSearchClass] = useState('app-search')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        setSearchBy(lastSearch)
        setSearchClass(prevClass => searchBy.length ? prevClass + ' focused' : 'app-search')
    }, [searchBy])

    const handleChange = ev => {
        let search = ev.target.value
        setSearchBy(search)
    }

    const onDoSearch = ev => {
        ev.preventDefault()
        if (!searchBy) return
        onSearch(searchBy)
    }

    return (
        <section className={searchClass} >
            <form onSubmit={onDoSearch}>
                <input ref={inputRef} type="text" value={searchBy} name="name" placeholder="Search..." onChange={handleChange} autoComplete="off" />
                <button className={`search-icon ${searchBy ? 'isActive' : ''}`}><SearchIcon /></button>
            </form>
        </section>
    );
};
