import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef();

    const genres = [
        {
            id: 28,
            name: "Action",
        },
        {
            id: 35,
            name: "Comedy",
        },
        {
            id: 18,
            name: "Drama",
        },
        {
            id: 16,
            name: "Animation",
        },
        {
            id: 27,
            name: "Horror",
        },
        {
            id: 878,
            name: "Fiction",
        },
        {
            id: 53,
            name: "Thriller",
        },
    ];
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.length) {
            navigate(`/search/${searchTerm}`)
        } else {
            inputRef.current.focus();
        }
    };
    return (
        <div className="navbar">

            <div>
                <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
                {genres.map((item, i) => <Link key={i} to={`/genre/${item.name}/${item.id}`}><i className="fa fa-fw fa-user"></i>{item.name}</Link>
                )}
            </div >

            <div className="main-search">
                <form className="form" onSubmit={handleSearch} >
                    <input ref={inputRef} type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
            </div>

        </div>


    );
}

export default NavBar;
