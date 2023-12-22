import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <div className="sticky top-0 w-full p-2 flex justify-start items-center gap-x-2 inset-1 shadow-md">
          <div className="relative h-8 w-8 aspect-square">
              <Image src="/assets/logo.png" alt="postman-logo" fill/>
          </div>
          <h2 className="text-xl text-[#F15A24] font-medium">Postman</h2>
    </div>
  )
}

export default Navbar