import React from "react"
import { Link } from "react-router-dom"

const Notes = (props) => (
  <div className='notes'>
    <h1 className='notes__heading'>NOTES</h1>
    {props.notes.length > 0 && props.notes.map((note) => {
      return <Link key={note.id} to={`/notes/${note.id}`}> <h3 className='notes__title'>{note.title}</h3></Link>
    })}
    <button className="notes__new">NEW NOTE</button>
  </div>
)

export default Notes