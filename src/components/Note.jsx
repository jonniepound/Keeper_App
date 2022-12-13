import React from "react";

// This displays an individual note with a button that allows the user
// to delete a nots. The function to actually delete the note is passed
// from App.jsx and is available in the props parameter.

function Note(props) {
  // This handles the user clicking on the DELETE button
  // The props parameter contains not only a function to remove the node (in App.jsx)
  // but also the ID of the note.

  function handleClick() {
    props.onDelete(props.id);
  }
  // This bit just displays the note.
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
