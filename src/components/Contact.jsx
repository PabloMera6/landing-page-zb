import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { VscError } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";

const Contact = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_0ftu14o';
    const templateId = 'template_0twnpuk';
    const apiKey = 'fK6QnIXuWzzRN2rvr';

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        var successDiv = document.getElementById('success');
        successDiv.classList.remove('hidden');
        var errorDiv = document.getElementById('error');
        errorDiv.classList.add('hidden');
      }, (error) => {
        console.error(error);
        var successDiv = document.getElementById('success');
        successDiv.classList.add('hidden');
        var errorDiv = document.getElementById('error');
        errorDiv.classList.remove('hidden');
      });
  }

  return (
    <div
      id="contact"
      className=" bg-bg"
    >
      <div className='className="grid xl:p-20 xl:max-w-[1200px] l:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200'>
        <div id="error" className="hidden bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><VscError  className="fill-current h-10 w-10 text-red-500 mr-4" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></VscError></div>
            <div>
              <p className="font-bold">Error al enviar el correo</p>
              <p className="text-sm">Vuelve a intentarlo</p>
            </div>
          </div>
        </div>
        <div id="success" className="hidden bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><TiTick   className="fill-current h-10 w-10 text-teal-500 mr-4" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></TiTick></div>
            <div>
              <p className="font-bold">Correo enviado correctamente</p>
              <p className="text-sm">¡Muchas gracias por contactarnos!</p>
            </div>
          </div>
        </div>
        <form ref={refForm} action='' onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Contáctanos</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border-2 border-primary-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border-2 border-primary-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                className="p-2 border-2 border-primary-200"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-primary-200 text-white rounded-xl mb-10"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact