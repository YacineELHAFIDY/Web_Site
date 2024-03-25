import React from 'react';
import Item from './Item';
import Pc from "../images/pcs.png"
import Laptop from "../images/laptop.png"
import Manette from "../images/manette.png"
const Carts = () => {
    return (
        <div className='max-w-[1440px] mx-auto gap-8 grid md:grid-cols-3 px-8 pt-16'>
            
            <Item image={Pc} num ="01" title = "Reviving Retro PCs" text="What happens when old PCs are given modern upgrade?" />
            <Item image={Laptop} num ="02" title = "Top 10 Laptops of 2022" text="Our best picks for various needs and budgets" />
            <Item image={Manette} num ="03" title = "The Growth of Gaming" text="How the pandemic has sparked fresh opportunities" />
        </div>
    );
}

export default Carts;
