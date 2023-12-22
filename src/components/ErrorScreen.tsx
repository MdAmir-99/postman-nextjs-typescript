"use client"
import {useApiContext} from '@/context/ApiContext'
import Image from 'next/image'
import React from 'react'

const ErrorScreen=() => {
    const {apiError}=useApiContext();
  return (
      <div className="flex flex-col items-center gap-y-2 mt-6">
          <div className="relative h-[48px] w-[48px] aspect-square">
              <Image src="/assets/logo.png" alt="logo" fill className="object-cover"/>
        </div>
          <p className="text-[12px] font-medium">Could not get response</p>
          <p className="px-1 text-[10px] font-medium bg-red-300 rounded-md">Parse Error: {apiError}</p>
          <p className="text-[11px] font-medium text-blue-600">Learn more about troubleshooting API requests</p>
    </div>
  )
}

export default ErrorScreen