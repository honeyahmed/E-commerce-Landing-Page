import React from 'react';
import Products from '../Products/Products';
import Announcement from '../Announcement/Announcement';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Home;
