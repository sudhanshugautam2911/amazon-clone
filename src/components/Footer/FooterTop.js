import React from 'react'

const FooterTop = () => {
  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className='flex flex-col items-center justify-center text-[13px] space-y-1'>
          <p className='tracking-wide'>See personalized recommendations</p>
          <button className='bg-[#ffce52] rounded-md px-24 py-2 text-[12px] border border-yellow-600 font-semibold tracking-wide active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>Sign in</button>
          <p className='text-[11px] tracking-wide'>
            New Customer?
            <span className='text-[#0078be] hover:text-yellow-500 cursor-pointer'>Start here</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop