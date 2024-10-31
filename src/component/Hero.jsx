import React from 'react'

function Hero({children}) {
  return (
    <div className='border w-[100%] h-[500px] banner mt-1'>
        <div className='grid grid-cols-2'>
          {children}
        </div>
    </div>
  )
}

export default Hero