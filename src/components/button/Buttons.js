import React from 'react'

export const Buttons = ({name, e}) => {
  return (
    <button className='bg-blue-400 rounded-lg text-white text-2xl p-2' onClick={e}>
          {name}
        </button>
  )
}
