import React from 'react';


const Item = ({image, num, title, text}) => {
    return (
        <div className='flex'>
            <img src={image} className='w-[100px] h-full'/>
            <div className='ml-6' >
            <h1 className='inter-title text-3xl text-[#708096] opacity-75'>{num}</h1>
            <h1 className='inter-m text-[24px]'>{title}</h1>
            <p className='text-[#708096] inter-p text-[15px]'>{text}</p>
            </div>
            
        </div>
    );
}

export default Item;
