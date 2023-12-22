import React from 'react'

const WrapperDiv=({children}:any) => {
  return (
      <div className="w-full lg:w-[80%] mx-auto p-2">
          {children}
    </div>
  )
}

export default WrapperDiv