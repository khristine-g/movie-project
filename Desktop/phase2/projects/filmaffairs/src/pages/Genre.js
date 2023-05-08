import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const Genre = () => {
    const { name, id } = useParams();
    const [searchedData, setSearchedData] = useState([]);
    console.log(name, id);
    const fetchData = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=36abea3582203c7689f8273cff6a9daa&with_genres=${id}`
        )
        .then((res) => res.json())
        .then((data) => setSearchedData(data.results));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(searchedData);
    return (
        <div className="collection-main " style = {{backgroundColor:""}}>
            <h1 className="collection-name">{name}</h1>
            <div className="sm-cards-collections">
                {searchedData.map((data) => (
                    <Card
                        key={data.id}
                        movie={data}
                    />
                ))}
            </div>
        </div>
        // <></>
    )
}

export default Genre
