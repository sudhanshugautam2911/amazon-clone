import React, { useEffect, useRef, useState } from 'react'
import { logo } from '../assets/index'
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { items } from '../constants';

const Header = () => {

    const [showAll, setShowAll] = useState(false);



    useEffect(() => {
        const handleClickOutside = event => {
            if (!event.target.closest("span")) {
                setShowAll(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center'>

                {/* Left side */}
                <div className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="Amazon" />
                </div>

                <div className='headerHover'>
                    <LocationIcon />
                    <p className='flex flex-col text-sm font-light text-lightText'>Deliver to <span className='font-semibold text-whiteText'>Oman</span></p>
                </div>

                {/* mid search part */}
                <div className="h-10 rounded-md flex flex-grow relative mx-2">
                    <span onClick={() => setShowAll(!showAll)} className='w-14 h-full text-sm flex items-center justify-center text-[#6a6155] hover:text-amazon_blue bg-gray-200 hover:bg-gray-300  cursor-pointer rounded-tl-md rounded-bl-md px-7'>
                        All<span></span>
                        <ArrowDropDownOutlinedIcon />
                    </span>
                    {
                        showAll && (
                            <div>
                                <ul className='absolute w-48 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] text-black text-md font-titleFont flex-col gap-1 z-50 border-amazon_blue rounded-lg'>

                                    {items.map((item, index) => (
                                        <li key={index} className='hover:text-white hover:bg-[#838383] p-1 cursor-pointer'>{item}</li>
                                    ))}

                                </ul>
                            </div>
                        )
                    }
                    <input type="text" className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchIcon />
                    </span>
                </div>

                {/* right side */}
                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs font-light text-lightText'>Hello, sign in</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'>
                        Accounts & Lists{" "}
                        <span>
                            <ArrowDropDownOutlinedIcon />
                        </span>
                    </p>
                </div>
                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs font-light text-lightText'>Returns</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'>
                        & Orders
    
                    </p>
                </div>
                <div className='flex items-start justify-center headerHover relative'>
                    <ShoppingCartIcon/>
                    <p className='text-sm font-semibold b-6 text-whiteText mt-3'>Cart <span className='absolute text-xs left-6 -top-2 font-semibold bg-amazon_yellow rounded-full p-1 h-4 flex items-center justify-center text-amazon_blue'>0</span></p>
                </div>
                
            </div>
        </div>
    )
}

export default Header