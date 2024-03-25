import React from 'react';
import Desktop from "../images/desktop.png"
import Mobile from "../images/mobile.png"


const Hero = () => {
    return (
        <div className='max-w-[1440px] px-8 mx-auto grid md:grid-cols-3 gap-8 grid-cols-1'> 
            <div className='md:col-span-2 w-full'>
                <img src={Desktop} className='hidden md:block w-full h-fit mb-8'/>
                <img src={Mobile} className='block md:hidden w-full h-fit'/>
                <div className='md:h-full w-full grid md:grid-cols-2 grid-cols-1 md:mt-6 py-6 md:py-0'>
                    <h1 className='inter-title font-bold text-7xl md:px-2'>The Bright Futur Of Web 3.0? </h1>
                    <div className='text-[26px] md:text-[19px] text-[#5b5d76] md:ml-6'>
                        <p className='inter-p my-8 md:mt-0 md:mb-[9%]'>We drive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='hover:bg-black px-8 py-2 uppercase tracking-widest bg-[#f15e50] text-white font-semibold' >Read More</button>
                    </div>
                </div>
            </div>   
            <div className='bg-[#050A19] h-fit md:w-full text-white px-8'>
                    <h1 className='inter-m text-[#e9ab53] text-5xl my-10 '>New</h1>
                    <div className='border-b-2 border-[#708096]'>
                        <h1 className='inter-m text-[24px] hover:text-[#e9ab53] hover:cursor-pointer'>Hydrogen VS Electric Cars</h1>
                        <p className='text-[#708096] inter-p text-[19px] mt-2 mb-8 '>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className='border-b-2 border-[#708096]'>
                    <h1 className='inter-m text-[24px] mt-8 hover:text-[#e9ab53] hover:cursor-pointer'>The Downsides of AI Artisty</h1>
                        <p className=' text-[#708096] inter-p text-[19px] mt-2 mb-8 '>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div >
                    <h1 className='inter-m text-[24px] mt-8 hover:text-[#e9ab53] hover:cursor-pointer'>Is VC Funding Drying Up?</h1>
                        <p className='text-[#708096] inter-p text-[19px] mt-2 mb-8 '>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div> 

        </div>
    );
}

export default Hero;
