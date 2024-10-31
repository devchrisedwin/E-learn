import React from 'react'

function Card({children}) {
  return (
    <div className='w-[62%] m-[auto] flex flex-wrap mt-6 p-3 gap-1'>
        {children}
    </div>
  
  )
}

export default Card