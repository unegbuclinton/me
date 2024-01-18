import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div
      id='contact-me'
      className='text-center max-w-[600px] my-0 mx-auto h-[63vh]'
    >
      <h3 className='font-semibold text-lg lg:text-3xl text-center mb-2 lg:my-5'>
        What's Next?
      </h3>
      <h1 className='font-semibold text-3xl lg:text-xl'>Get in Touch</h1>
      <p className='mt-3 mb-7 lg:mb-4'>
        I’m currently open to new opportunities.If you have Further questions or
        considering me for a role please leave a message and I'll get back to
        you as soon as I can.
      </p>
      <a
        href='mailto:unegbucinton5@gmail.com?cc=zemus241@gmail.com'
        className='p-2 text-sm font-semibold border border-onyx hover:bg-onyx hover:text-flash-white rounded-lg w-[60%] '
      >
        Drop me a Message
      </a>
    </div>
  )
}

export default Contact
