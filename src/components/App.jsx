import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./Inputarea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteNote(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <div className="input-container">
        <InputArea onAdd={addNote} />
      </div>
      <div className="note-container">
        {items.map((noteItem, index) => (
          <Note
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            onCheck={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
