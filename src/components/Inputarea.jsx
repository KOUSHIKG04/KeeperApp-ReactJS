import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function InputArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setInputText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: "",
    });
  }

  function Expand() {
    setExpanded(true);
  }

  return (
    <>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded ? (
          <input
            placeholder="Title"
            name="title"
            onChange={handleInput}
            value={inputText.title}
          ></input>
        ) : null}

        <textarea
          onClick={Expand}
          placeholder="Take a note...."
          name="content"
          onChange={handleInput}
          value={inputText.content}
          rows={isExpanded ? 3 : 1}
        ></textarea>

       
        <Zoom in={isExpanded}>
          <Fab
            className="button"
            type="submit"
            /*onClick={() => {
            props.onAdd(inputText);
            setInputText({
              title: "",
              content: "",
            });
          }}*/
            sx={{
              ":hover": {
                color: "#fffcfc",
                backgroundColor: "#424242",
              },
            }}
          >
            +
          </Fab>
        </Zoom>
      </form>
    </>
  );
}

export default InputArea;
