import React from 'react'

export const Card = ({idC, nameC}) => {
  return (
    <div className='bg-slate-100 text-2xl mb-4'>
        <h1 className='mb-2'>id: {idC}</h1>
        <h1>name: {nameC}</h1>
      </div>
  )
}
