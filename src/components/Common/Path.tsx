"use client";
import { Typography } from '@material-tailwind/react'
import Link from 'next/link';
import React from 'react'

export default function Path({tab}:{tab:string}) {
  return (
    <div className='flex flex-wrap rounded-lg border-dashed h-6 px-4 border-2 bg-white my-4  items-center'>
      <Typography placeholder={ undefined } className='text-sm font-extralight'>
        <Link href={ '/' } className='text-blue-700 mr-1 hover:text-orange-900'>Home</Link>
        <span className='capitalize'>{`/ ${tab}`}</span>
      </Typography>
    </div>
  )
}
