import React from 'react'

const Message = ({children}) => {
  return (
    <div className='border flex my-5 mx-8 py-1'>Message {children}</div>
  )
}

export default Message