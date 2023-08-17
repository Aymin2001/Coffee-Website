import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='home-container container'>
                <div className='home-content'>
                    <span className='home-subtitle'>
                        Welcome To Coffero!
                    </span>
                    <h1 className='home-title'>
                        Discover Amazing Coffee House &  Get Energy
                    </h1>
                    <p className='home-desc'>
                        There are many variations of passages available but the majority have suffered alteration in some form y injected humour orrandomised words.
                    </p>
                    <div className='home-btns'>
                        <a href="#Menu" className='btn'>Check Menu</a>
                        <a href="#Reservation" className='btn book-btn'>Book Table</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Home
