import React from 'react'
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import NavBar from '../components/NavBar'
import Popular from '../components/Popular'
 import Reviews from '../components/Reviews'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <NavBar />
            <MovieList />
            <Trending />
            <Popular />
            
            <Footer /> 
             <Reviews />
        </>
    )
}

export default Home;