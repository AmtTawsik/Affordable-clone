import React from 'react';
import p1 from '../../Media/diffaran.jpg'

const Automation = () => {
    return (
        <div className='bg-secondaryBG' id='Contact'>
            <div className='grid grid-cols-12 items-center'>
                <div className='md:col-span-6 col-span-12 md:p-20'>
                    <img className='w-full' src={p1} alt="" />
                </div>
                <div className='text-white md:col-span-6 col-span-12 md:p-20 w-11/12 mx-auto mt-5 md:mt-0 pb-5'>
                    <h3 className='text-4xl'>The Difference!</h3>
                    <p className='my-5'>Traditional web development services demand an upfront investment. Unattended, over time they become vulnerable and open to security breaches. New designs emerge & technology evolves. And when you need that IT team – they are MIA.</p>
                    <p className='mb-2'>We are always around! meet our team</p>
                    <p>When you grow, we grow!</p>
                </div>
            </div>
        </div>
    );
};

export default Automation;