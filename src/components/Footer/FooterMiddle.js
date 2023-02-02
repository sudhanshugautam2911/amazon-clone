import React from 'react'
import { middleList } from '../../constants'
import FooterMiddleList from './FooterMiddleList'
import { logo } from '../../assets/index'


const FooterMiddle = () => {
    return (
        <div className='w-full bg-amazon_light text-white px-14'>
            <div className='flex w-full border-b-[1px] border-gray-500 py-12 justify-around font-Roboto text-gray-300'>
                {
                    middleList.map((item) => (
                        <FooterMiddleList key={item._id} title={item.title} listItem={item.listItem} />
                    ))
                }
            </div>
            <div className='flex items-center w-full gap-6 justify-center py-6'>
                <div>
                    <img src={logo} className='w-20 pt-3' alt="Bottom Logo" />
                </div>
                <div className='border border-gray-500 px-2 py-1 cursor-pointer hover:border-amazon_yellow duration-200'>
                    <p>English</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle