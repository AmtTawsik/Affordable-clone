import React from 'react';
import p1 from '../../Media/our/p1.webp'
import p2 from '../../Media/our/p2.webp'

const OurClients = () => {
    return (
        <div className='bg-secondaryBG' id='What'>
            <div className='bg-our-bg bg-cover'>
                <h2 className='text-6xl font-bold text-center text-white pt-10 mb-10'>Our Latest</h2>
                <div className='grid grid-cols-12 w-11/12 mx-auto text-white gap-5'>
                    <div className='md:col-span-6 col-span-12'>
                        <div className='flex justify-center'><img src={p1} alt="" /></div>
                        <h3 className='my-5 text-4xl md:text-5xl font-bold'>WashMe! Property Services</h3>
                        <p className='text-lg mb-5'>It was an easy decision. A website that is not an investment, but an affordable expense! Absolutely! Not only did we get an amazing looking website, we got peace of mind. Now, my time is spent on the “Sale” and not on technology.</p>
                        <div className='text-white px-5 py-2 rounded-md border-2 hover:border-secondaryBG cursor-pointer w-fit mb-5'>View Website</div>
                    </div>
                    <div className='md:col-span-6 col-span-12'>
                    <div className='flex justify-center'><img src={p2} alt="" /></div>
                        <h3 className='my-5 text-4xl md:text-5xl font-bold'>WashMe! Property Services</h3>
                        <p className='text-lg mb-5'>It was an easy decision. A website that is not an investment, but an affordable expense! Absolutely! Not only did we get an amazing looking website, we got peace of mind. Now, my time is spent on the “Sale” and not on technology.</p>
                        <div className='text-white px-5 py-2 rounded-md border-2 hover:border-secondaryBG cursor-pointer w-fit mb-5'>View Website</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;