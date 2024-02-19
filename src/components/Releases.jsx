import React from 'react'

const Releases = () => {
  return (
    <div
      id="releases"
      className=" bg-bg"
    >
      <div className='className="grid px-8 xl:px-20 xl:max-w-[1200px] l:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200'>
        <h1 className="text-[40px] font-bold">Nuestros lanzamientos</h1>
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 p-5">
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
            Devising a project
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
              Sprint 1
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
              Sprint 2
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
              Sprint 3
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
              Preparing project launch
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-800">
              World project launch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Releases