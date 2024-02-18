import React from 'react'

export default function Title({text}:{text:string}) {
  return (
    <div className="flex flex-col items-center">
        <p className="font-bold pb-5 text-[28px] font-sans text-[#444444]">
          {text}
        </p>
        <p className="border-b-[3px] border-[#4a84db] w-10" />
      </div>
  )
}
