import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote]=useState({
    title: "",
    content:"",
  });

  function handleChange(e){
    const {name , value} = e.target;

    setNote((prev)=>{
      return {
        ...prev,[name]:value
      };
    });
  }
  function submit(e){
  props.onAdd(note);
  setNote({
    title:"",
    content:""
  });
  e.preventDefault();

  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button onClick={submit} disabled={!note.title|| !note.content}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
