import React from 'react'

const FooterMiddleList = ({ title, listItem }) => {
    return (
        <div className=''>
            <ul className='space-y-2'>
                <li className='footerLink font-bold pb-3 text-white'>{title}</li>
                {
                    listItem.map((item) => item.listData.map((data, id) => (
                        <li key={id} className="footerLink flex">{data}</li>
                    )))
                }
            </ul>
        </div>
    )
}

export default FooterMiddleList