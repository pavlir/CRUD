import { useEffect, useState } from 'react'
import './App.css'
import { NoteForm } from './components/NoteForm'
import { Note } from './components/Note';

interface Note {
  id : string,
  content : string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleUpdate = () : void => {
    updateNotes();
  };

  const handleAdd = async (content : string) : Promise<void> => {
    const newNote = {
      id: notes.length + 1,
      content
    };

    await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote),
    });
    updateNotes();
  };

  const handleRemove = async (id : string) : Promise<void> => {
    await fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE' });
    updateNotes();
  };

  const updateNotes = () : void => {
    fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then(data => {
          setNotes(data);
        });
  };

  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div>
      <NoteForm addNote={handleAdd}/>
      <hr/>
      <input type="button" value="Update Notes" onClick={handleUpdate} />
      <h3>Notes: </h3>
      <div className="note-list">
        {
          notes.map(note => {
            return <Note key={note.id} id={note.id} content={note.content} onRemove={handleRemove} />
          })
        }
      </div>
    </div>
  )
}

export default App
