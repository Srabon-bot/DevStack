import bannerStack from '../assets/banner-stack.png';
import Gradient from './Gradient';

const Banner = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto py-12 gap-10">
                <div className="text-center lg:text-left">
                    <h1 className='font-inter text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold m-0 leading-tight lg:leading-none'>
                        Build Your Ideal
                    </h1>
                    <Gradient
                        as={'h1'}
                        variant='text'
                        className='font-inter text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold m-0 mt-1 leading-tight lg:leading-none'
                    >
                        Development Stack
                    </Gradient>
                    <p className="text-[16px] lg:text-[19px] font-normal text-base-content/70 max-w-xl mx-auto lg:mx-0 m-0 mt-6.5">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className="flex gap-3 mt-10 justify-center lg:justify-start">
                        <Gradient as="button" variant="bg" className="font-inter btn rounded-lg flex-1 sm:flex-none sm:w-52">
                            Explore Technologies
                        </Gradient>
                        <button className="font-inter btn rounded-lg flex-1 sm:flex-none sm:w-52 text-[#424953]">
                            Learn More
                        </button>
                    </div>
                </div>
                <img
                    alt="Tailwind CSS hero component"
                    src={bannerStack}
                    className="w-64 sm:w-80 lg:w-auto"
                />
            </div>
        </div>
    );
};

export default Banner;