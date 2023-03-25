import React from 'react'

const Header = ({search, setSearch}) => {
    return (
        <div className='header-container'>
            <div className="logo"><h1>Candidates List</h1></div>
            <div className="searchbox">
                <form>
                    <div className="searchInner">
                        <input type="text" placeholder="Search Users by name..." className="searchText" onChange={(e) => { setSearch(e.target.value) }} value={search} ></input>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Header