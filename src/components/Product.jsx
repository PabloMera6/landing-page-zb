import React from 'react'

import { FaPeopleGroup } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";
import { DiHtml53DEffects } from "react-icons/di";
import { IoIosPricetag } from "react-icons/io";

const Product = () => {
  return (
    <div
      id="product"
      className=" bg-bg"
    >
      <div className='className="grid xl:p-20 xl:max-w-[1200px] l:max-w-[800px]  mx-auto text-primary-200'>
        <h1 className="text-[40px] font-bold">¿Qué ofrecemos?</h1>
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <IoIosPricetag className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Presupuesto Instantaneo</h3>
            <p className="text-gray-500">
              Sometimes features require a short description
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <DiHtml53DEffects className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Impresión bajo demanda</h3>
            <p className="text-gray-500">
              Sometimes features require a short description
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <SiMaterialdesignicons  className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Diseños a medida</h3>
            <p className="text-gray-500">
              Sometimes features require a short description
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <FaPeopleGroup  className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Comunidad</h3>
            <p className="text-gray-500">
              Sometimes features require a short description
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product