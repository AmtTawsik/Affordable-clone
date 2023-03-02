import React from 'react';
import Hero from '../Hero/Hero';
import CaseStudies from '../CaseStudies/CaseStudies';
import OurClients from '../OurClients/OurClients';
import Benefits from '../Benefits/Benefits';
import Automation from '../Automation/Automation';
import WeDo from '../WeDo/WeDo';
import DoIt from '../DoIt/DoIt';

const Home = () => {
    return (
        <div className='font-sansSerif w-full'>
            <Hero></Hero>
            <CaseStudies></CaseStudies>
            <OurClients></OurClients>
            <Benefits></Benefits>
            <Automation></Automation>
            <WeDo></WeDo>
        </div>
    );
};

export default Home;