import React, { useState } from 'react'

interface INoteForm {
  addNote : (content : string) => void
}

export const NoteForm : React.FC<INoteForm> = ({addNote}) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = () : void => {
    addNote(text);
    setText('');
  };

  const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) : void => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='note-form'>
        <h5>Add Notet: </h5>
        <div className='form-content'>
          <textarea name="noteText" id="noteText" value={text} onChange={handleChange}></textarea>
          <button>Add</button>
        </div>
    </form>
  )
}
