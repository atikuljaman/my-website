import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import FunFact from './FunFact/FunFact';
import './Home.css';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <About />
            <Skills />
            <Services />
            <Projects />
            <FunFact />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;