import React from 'react';

const HR = ({children}) => {
    return (
        <h2 class="text-black-light text-[30px] font-bold w-fit" data-aos="fade-right" data-aos-easing="ease-in-out">{children}
      <div className="h-[10px] bg-secondaryBG rounded-sm w-[50%] my-2"></div>
      </h2>
    );
};

export default HR;