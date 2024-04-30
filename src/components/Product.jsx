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
      <div className='className="grid xl:p-20 xl:max-w-[1200px] l:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200'>
        <h1 className="text-[40px] font-bold">¿Qué ofrecemos?</h1>
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <IoIosPricetag className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Precios justos</h3>
            <p className="text-gray-500">
              Un lugar donde todas las personas interesadas en la impresión 3D puedan comprar y vender todo tipo de productos relacionados con la impresión 3D, desde figuras, diseños o materiales a impresoras 3D al mejor precio
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <DiHtml53DEffects className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Impresión bajo demanda</h3>
            <p className="text-gray-500">
              La posibilidad de imprimir tus propios diseños sin tener una impresora 3D
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <SiMaterialdesignicons  className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Diseños a medida</h3>
            <p className="text-gray-500">
              Con la posibilidad de contactar con un diseñador para obtener un diseño a medida
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <FaPeopleGroup  className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Comunidad</h3>
            <p className="text-gray-500">
              Con una comunidad de diseñadores y artistas donde podrás compartir tus creaciones
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product