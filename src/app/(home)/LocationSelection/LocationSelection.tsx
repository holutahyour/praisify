import React from 'react'

type Props = {}

function LocationSelection({}: Props) {
  return (
    <section className='flex py-6 gap-4 items-center'>
        <h1 className='text-3xl font-black text-gray-700'>Popular in</h1>
        <select className='focus-visible:outline-none border-b-2 text-primary text-3xl font-black'>
          <option className='text-lg inline-block p-10'>Lagos</option>
          <option>Ikeja</option>
        </select>
    </section>
  )
}

export default LocationSelection