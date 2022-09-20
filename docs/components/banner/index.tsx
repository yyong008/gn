import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <img className='w-30 h-30' src='/images/gn.png' />
      <div className='my-10 font-extrabold'>Welcome to Command Elation Gn!</div>
      <div className='my-10 font-extrabold'>
        Command Cli 生成配置文件，生成/管理 package.json
        等工具，为了编程中的乐趣
      </div>
      <div>
        <a
          href='/gn'
          className='bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-amber-500 dark:highlight-white/20 dark:hover:bg-amber-400'
        >
          开始
        </a>
      </div>
    </div>
  )
}

export default Banner
