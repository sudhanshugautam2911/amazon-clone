import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products)

  return (
    <div className='w-full bg-gray-100 p-4'>
      <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
        <div className='w-full h-full bg-white px-4 col-span-4'>
          <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
            <h2 className='font-semibold text-3xl'>Shopping Cart</h2>
            <h4 className='font-semibold text-xl'>Subtotal</h4>
          </div>
          {/*  Products start here */}
          <div>
            {
              products.map((item) => (
                <div className="w-full flex items-center gap-6">

                  <div key={item.id} className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6'>
                    <div className='w-1/5'>
                      <img className='w-full h-44 object-contain' src={item.image} alt="Product image" />
                    </div>
                    <div className='w-3/5'>
                      <h2 className='font-semibold text-lg'>{item.title}</h2>
                      <h4 className='pr-10 text-sm'>{item.description}</h4>
                      <p className='text-base'>
                        Unit Price<span className='font-semibold'>${item.price}</span>
                      </p>
                      <div className='bg-[#F0F2F2] flex gap-2 justify-center items-center w-36 py-1 text-center drop-shadow-lg rounded-md '>
                        <p>Qty:</p>
                        <p className='cursor-pointer font-semibold bg-gray-200 px-2 rounded-sm hover:bg-gray-400 duration-300'>-</p>
                        <p className='font-semibold px-1'>{item.quantity}</p>
                        <p onClick={() => { }} className='cursor-pointer font-semibold bg-gray-200 px-2 rounded-sm hover:bg-gray-400 duration-300'>+</p>
                      </div>
                      <button className='rounded-lg w-36 py-1 mt-3 bg-red-500 text-white hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>
                    </div>
                    <div className=''>
                      <p className='font-semibold font-titleFont text-lg'>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-full h-full bg-white col-span-1'></div>
      </div>
    </div>
  )
}

export default Cart