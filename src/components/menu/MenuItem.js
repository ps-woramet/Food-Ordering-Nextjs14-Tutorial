import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-gray transition-all'>
        <div className='text-center'>
            <img src='/pizza3.png' className='max-h-auto max-h-24 flex mx-auto' alt="pizza"/>
        </div>
        <h4 className='font-semibold text-xl my-2 text-center'>Peperoni Pizza</h4>
        <p className='text-gray-500 text-sm text-center pb-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>
        <button className='bg-primary text-white rounded-full px-4 py-2'>
            Add to card $12
        </button>
    </div>
  )
}

export default MenuItem
