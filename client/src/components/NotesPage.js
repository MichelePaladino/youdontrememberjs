import React from 'react'

import './NotesPage.css'
import Notes from './Notes'

const NotesPage = (props) => {

  return (
    <div className='notespage'>
      <Notes notes={props.notes} /> 
    </div>
  )
}

export default NotesPage