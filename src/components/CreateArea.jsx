import React, { useState } from "react";

// This is the area where a user creates a note.

function CreateArea(props) {
  // define a note "state" for this element so that we can keep hold
  // of it. You could use two separate states, but it would require a little
  // more code to deal with.

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // deconstruct the event - as "name" might be "title" or "content"
    // "value" will be whatever the user inputted.

    const { name, value } = event.target;
    //console.log ( name + " " + value);
    // set the state to whatever it was before and the new value
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // when the user clicks on the "Add" button. The addNote() funciton is passed here
  // through the props parameter "onAdd". ie: onAdd is actually addNote(). We pass
  // this function the note (which we save as a state variable in this component)
  // Then we call setNote() to reset the fields to empty strings.
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
