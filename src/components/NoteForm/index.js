import React, { useState, useEffect } from "react";
import "./notes.css"

//decided to add a notes feature so users may keep a weight log or yoga journal


function Note() {
const [notes, setNotes] = useState([]);
// the array of notes state


const addNote = (e) => {
  e.preventDefault();
  const newNote = {
    id: Math.random().toString(36).substr(2, 9),
    text: e.target.note.value,
    // gives each note a unique id and saves the value of the text input
    
  };
  setNotes([...notes, newNote]);
  e.target.note.value = "";
  // this adds the new note to our notes array and resets the text box 

}

const deleteNote = (idToDelete) => {
  const updatedNotes = notes.filter((note) => note.id !== idToDelete);
  setNotes(updatedNotes);
};


useEffect(() => {
    // useEffect allows use to use the localstorage function 
  const string = JSON.stringify(notes);
//   this turns the notes objects into strings
  localStorage.setItem("notes", string);
   //this saves the notes to local storage!  
}, [notes]);


useEffect(() => {
  const json = localStorage.getItem("notes");
  const savedNotes = JSON.parse(json);
  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);





    return(

    <div className="container">
        
    <form onSubmit={addNote}>
        {/* when form is submitted, the note info is added */}
  <input type="text" name="note" />
  <button type="Submit" className="submit">Add Note!</button>
 {notes.map((note) => (
  <div key={note.id} className="note">
    <p>{note.text}</p>              
    <button onClick={() => deleteNote(note.id)}  className="delete">x</button>
  </div>
))}
{/* and here it's displayed to the page along with a button that allows for the note to be deleted */}
        </form>
    </div>
    )
}

export default Note