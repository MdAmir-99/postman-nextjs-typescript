import {getCurrentYear} from '@/utils/getCurrentYear'
import React from 'react'

const Footer = () => {
  return (
      <div className="fixed bottom-0 left-0 right-0 px-2 py-4 flex justify-center items-center bg-[#F15A24]">
          <h2 className="text-md text-white font-medium">All Right Reseved &copy; {getCurrentYear()}</h2>
      </div>
  )
}

export default Footer