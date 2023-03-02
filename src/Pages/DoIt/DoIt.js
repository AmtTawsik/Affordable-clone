import React from 'react';
import HR from '../../Components/HR';

const DoIt = () => {
    return (
        <div className='mb-16'>
            <HR>How We Do It?</HR>
            <p className='text-xl lg:w-6/12 my-10'>We make the whole process hastle free for you by making the process automated with intelligent bots.</p>
            <div className='grid grid-cols-12 gap-5'>
                <div className='bg-grayBG p-5 rounded-3xl col-span-12 md:col-span-6'>
                    <h2 className='text-3xl font-semibold mb-3'>Understand Customer's Pain Point</h2>
                    <p className='text-2xl mb-20'>Innovation comes from understanding true Pain-Points</p>
                </div>
                <div className='bg-grayBG p-5 rounded-3xl col-span-12 md:col-span-6'>
                    <h2 className='text-3xl font-semibold mb-3'>Building Proof of Concept</h2>
                    <p className='text-2xl mb-20'>Save your time and resources with reduced costs and boosting individual creativity.</p>
                </div>
                <div className='bg-grayBG p-5 rounded-3xl col-span-12 md:col-span-6'>
                    <h2 className='text-3xl font-semibold mb-3'>Designing and Training the Intelligent Robot</h2>
                    <p className='text-2xl mb-20'>Intelligent robots are easy to train and can be designed much faster without disrupting any existing IT systems.</p>
                </div>
                <div className='bg-grayBG p-5 rounded-3xl col-span-12 md:col-span-6'>
                    <h2 className='text-3xl font-semibold mb-3'>Release and Maintenance</h2>
                    <p className='text-2xl mb-20'>Intelligent Robots are at very low cost to maintain</p>
                </div>
            </div>
        </div>
    );
};

export default DoIt;