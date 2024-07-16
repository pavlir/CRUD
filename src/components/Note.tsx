import React from 'react'

interface INoteProps {
  id : string,
  content : string,
  onRemove : (id: string) => {}
}

export const Note : React.FC<INoteProps> = (props) => {
  const {id, content, onRemove} = props;

  return (
    <div className='note'>
      <div className="content">{content}</div>
      <input type="button" value="Remove" className="remove" onClick={() => {onRemove(id)}} />
    </div>
  )
}
