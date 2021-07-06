import React from 'react'
import {useGlobalContext} from './context'
export default function Search() {

    const {setQuery,setPage, query} = useGlobalContext()
    const handleSubmit=(e)=>{
        e.preventDefault();
    setPage(1)
    }
    return (
        <section className="search">
        <form onSubmit={handleSubmit} className="search-form">
                    <input type="text" className="form-input"  value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search Here"/>
                    <button className="submit-btn" type="submit">Search</button>
        </form>
</section>
    )
}
