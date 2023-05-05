import React from 'react'
// import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import NavBar from '../components/NavBar'
import Popular from '../components/Popular'
// import Review from '../components/Review'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <NavBar />
            <MovieList />
            <Trending />
            <Popular />
            {/* <Footer /> */}
            {/* <Review /> */}
        </>
    )
}

export default Home