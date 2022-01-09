import React from 'react'
import Ads from '../components/ads'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Intouch from '../components/Intouch'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Ads />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Intouch />
            <Footer />
        </div>
    )
}

export default Home
