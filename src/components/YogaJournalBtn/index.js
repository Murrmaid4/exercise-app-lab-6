import React from 'react'

import Note from '../NoteForm'

const Yoga  = ({title}) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <p>Keep a yoga journal here!</p>
        <Note/>
    </div>
  )
}

export default Yoga