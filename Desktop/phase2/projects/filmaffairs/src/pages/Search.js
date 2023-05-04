import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const Search = () => {
    const { name } = useParams();
  const [searchedData, setSearchedData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=36abea3582203c7689f8273cff6a9daa&query=${name}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setSearchedData(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="collection-main">
    <h1 className="collection-name">Search results for {`"${name}"`}</h1>
    <div className="sm-cards-collections">
      {searchedData.map((data) => (
        <Card
          key={data.id}
          movie={data}
        />
      ))}
    </div>
  </div>
  )
}

export default Search