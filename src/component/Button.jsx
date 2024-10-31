import React from 'react'

function Button({children}) {
  return (
    <div>
        <button className='bg-[#FF782D] text-white font-bold rounded-sm p-4 hover:opacity-[0.6]'>
            {children}
        </button>
    </div>
  )
}

export default Button