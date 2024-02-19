import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const retForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_2zj5w9e', 'template_4jx7x7p', retForm.current, 'user_6oVqzv4q9z6l6X2rNfZ8I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div
      id="contact"
      className=" bg-bg"
    >
      <div className='className="grid xl:p-20 xl:max-w-[1200px] l:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200'>
        Contacto
      </div>
    </div>
  )
}

export default Contact