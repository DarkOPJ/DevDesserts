import React from 'react'

const Backdrop = ({setShowModal}) => {
  return (
    <section onClick={() => setShowModal(false)} className='fixed inset-0 bg-black/50 z-30'></section>
  )
}

export default Backdrop