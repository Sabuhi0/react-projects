import React from 'react'
import { Note } from '../../note.model'
import "./index.css"

interface INotesProps {
  note: Note,
  handleDelete: (id: String) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <div className='notes-content'>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button className='notes-btn' onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  )
}

export default Notes;