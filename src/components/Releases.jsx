import React from 'react'

const Releases = () => {
  return (
    <div id="releases" className="bg-bg p-8 flex flex-col items-center justify-center gap-8 mt-0">
    <h1 className="text-2xl font-medium text-gray-800 text-center">
      Nuestros lanzamientos
    </h1>
    <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
      <p className='w-40'>Devising a project</p>
      <p className='w-40'>Sprint 1</p>
      <p className='w-40'>Sprint 2</p>
      <p className='w-40'>Sprint 3</p>
      <p className='w-40'>Preparing project launch</p>
      <p className='w-40'>World project launch</p>
    </div>
  </div>
  )
}

export default Releases