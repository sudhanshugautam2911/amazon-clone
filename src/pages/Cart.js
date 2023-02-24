import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { deleteItem } from "../redux/amazonSlice"
import { resetCart } from "../redux/amazonSlice"
import { incrementQuantity , decrementQuantity } from "../redux/amazonSlice";


// important things
// toFixed() is best to limit a value
// using redux-persist so that items in cart dont go after refresh


const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products)
  console.log(products)
  const [totalPrice, setTotalPrice] = useState("0");

  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    })
  })


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
                    <div className='w-4/5'>
                      <h2 className='font-semibold text-lg'>{item.title}</h2>
                      <h4 className='pr-10 text-sm'>{item.description.substring(0, 200)}</h4>
                      <p className='text-base my-2'>
                        Unit Price : <span className='font-semibold'>${item.price}</span>
                      </p>
                      <div className='bg-[#F0F2F2] flex gap-2 my-1 justify-center items-center w-36 py-1 text-center drop-shadow-lg rounded-md '>
                        <p>Qty:</p>
                        <p onClick={()=> dispatch(decrementQuantity(item.id))} className='cursor-pointer font-semibold bg-gray-200 px-2 rounded-sm hover:bg-gray-400 duration-300'>-</p>
                        <p className='font-semibold px-1'>{item.quantity}</p>
                        <p onClick={()=> dispatch(incrementQuantity(item.id))} className='cursor-pointer font-semibold bg-gray-200 px-2 rounded-sm hover:bg-gray-400 duration-300'>+</p>
                      </div>
                      <button onClick={() => dispatch(deleteItem(item.id))} className='rounded-lg w-36 py-1 mt-3  bg-red-500 text-white hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>
                    </div>
                    <div className=''>
                      <p className='font-semibold font-titleFont text-lg'>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            <div>
              <button onClick={()=> dispatch(resetCart())} className='rounded-lg w-36 py-3 m-3 font-titleFont font-bold bg-red-500 text-white hover:bg-red-700 active:bg-red-900 duration-300'>Clear Cart</button>
            </div>
          </div>
        </div>
        <div className='w-full h-52 bg-white col-span-1 p-4 flex items-center'>
          <div className='space-y-2'>
            <p className='text-sm flex items-start gap-2'>
              <span><CheckCircleIcon className='bg-white text-green-500 rounded-full' /></span>{" "}
              Your order qualifies for FREE Shipping Choose this option at checkout. See details....
            </p>
            <div className='flex justify-between m-6'>
              <p className='font-semibold font-titleFont text-lg'>Total: </p>
              <span className='font-bold font-titleFont text-lg'>${totalPrice}</span>
            </div>
            <div>
              <button className='w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>Proceed to Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart