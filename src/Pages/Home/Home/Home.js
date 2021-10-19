import React from 'react';
import Services from '../../Service/Services';
import Banner from './Banner/Banner';
import Provides from './Provide/Provides';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <Provides></Provides>
        </div>
    );
};

export default Home;