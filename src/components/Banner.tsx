import React from 'react';
import bannerStack from '../assets/banner-stack.png';
import Gradient from './Gradient';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex items-center justify-between container mx-auto py-12">
                <div>
                    <h1 className='text-[60px] font-extrabold m-0 leading-none'>Build Your Ideal</h1>
                    <Gradient
                        as={'h1'}
                        variant='text'
                        className='text-[60px] font-extrabold m-0 mt-1 leading-none'
                    >
                        Development Stack
                    </Gradient>
                    <p className="text-[19px] font-normal text-base-content/70 max-w-xl m-0 mt-6.5">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className="flex gap-3 mt-10">
                        <Gradient as="button" variant="bg" className="btn rounded-lg flex-1 sm:flex-none sm:w-52">
                            Explore Technologies
                        </Gradient>
                        <button className="btn rounded-lg flex-1 sm:flex-none sm:w-52">
                            Learn More
                        </button>
                    </div>
                </div>
                <img
                    alt="Tailwind CSS hero component"
                    src={bannerStack}
                />
            </div>
        </div>
    );
};

export default Banner;