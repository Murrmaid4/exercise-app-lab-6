import React from 'react'

import Note from '../NoteForm'

const Weights  = ({title}) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <p>Keep a weight log here!</p>
        <Note/>
    </div>
  )
}

export default Weights