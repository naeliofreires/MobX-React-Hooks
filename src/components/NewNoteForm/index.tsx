import React from "react";

import { useNotesStore } from "../../stores/NotesStore";

export default () => {
  const handleNoteStore = useNotesStore();

  const [noteText, setNoteText] = React.useState("");

  const add = (): void => {
    handleNoteStore?.addNote(noteText);
  };

  return (
    <>
      <input
        type="text"
        value={noteText}
        placeholder="new note"
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={add}> add new</button>
    </>
  );
};
