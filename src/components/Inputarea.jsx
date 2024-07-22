import React, { useState } from "react";

function InputArea(props) {
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
      content: ""
    });
  }

  return (
    <>
      <form className="notes-Input" onSubmit={submitNote} >
        <input
          placeholder="Title"
          name="title"
          onChange={handleInput}
          value={inputText.title}
        ></input>
        <textarea
          placeholder="Take a note"
          name="content"
          onChange={handleInput}
          value={inputText.content}
        ></textarea>
        <button
          type="submit"
          className="button"
          /*onClick={() => {
            props.onAdd(inputText);
            setInputText({
              title: "",
              content: "",
            });
          }}*/
        >
          ADD
        </button>
      </form>
    </>
  );
}

export default InputArea;
