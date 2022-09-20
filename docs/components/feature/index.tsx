import React from 'react'

const Feature = ({ data }) => {
  return (
    <div className='box-border w-2/5 h-40 p-4 m-1 flex flex-col items-start bg-slate-100 rounded-sm shadow-sm'>
      <div className='font-extrabold text-amber-400'>功能：{data.frames}</div>
      <div className='my-4 text-slate-400'>{data.content}</div>
    </div>
  )
}

export default Feature
