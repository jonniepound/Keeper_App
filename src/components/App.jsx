import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // This stores the notes and a method to update the notes
  const [notes, setNotes] = useState([]);

  // ADD a new note using the state method to return the previous notes
  // with the new note appended.
  // It its passed to CreateArea.jsx thoght the props onAdd
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  // DELETE a note (using its ID) by FILTERING the notes by ID
  // so it returns everything excepy the note with that ID.
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  // The map function here is used to iteratre throuh the notes and allows us
  // access to the index of each note (so we can use it as a KEY and ID) so that
  // we can pass it to DELETE a note at a later date.
  // OnDelete passses the deleteNote function (which takes id as a parameter)
  // -- this is used in the Note.jsx component
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
