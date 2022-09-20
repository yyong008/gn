import React from 'react'

const links = [
  {
    name: '首页',
    url: '/'
  },
  {
    name: 'Generator',
    url: '/gn'
  },
  {
    name: 'Create',
    url: '/create'
  }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col absolute left-10 top-20 p-8 bg-lime-100'>
      {links.map((link) => {
        return (
          <a className='my-2' href={link.url} key={link.name}>
            {link.name}
          </a>
        )
      })}
    </div>
  )
}

export default Sidebar
