import React from 'react'
import { Note } from '../../note.model';
import Notes from '../Note';

interface IListNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const ListNotes: React.FC<IListNoteProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: String) => setNotes(notes.filter(note => note.id !== id));
  return (
    <>
      <h2 className='mt-4'>Notes</h2>
      <div>{notes.map(note => <Notes key={note.id} note={note} handleDelete={handleDelete} />)}</div>
    </>
  )
}

export default ListNotes;