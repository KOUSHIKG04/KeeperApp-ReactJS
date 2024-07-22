import React from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <NoteAddIcon 
        sx={{ 
            height: "33px",
            width: "33px", 
        }}
        />
        Note Keeper</h1>
    </header>
  );
}

export default Header;
