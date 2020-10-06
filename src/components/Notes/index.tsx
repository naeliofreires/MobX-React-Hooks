import React from "react";
import { useObserver } from "mobx-react";

import { useNotesStore } from "../../stores/NotesStore";

import NewNoteForm from "../NewNoteForm";

export default () => {
  const handleNoteStore = useNotesStore();

  return useObserver(() => (
    <div>
      <h2>My Notes</h2>
      <ul>
        {handleNoteStore?.notes.map((value) => (
          <li
            key={value.id}
            onClick={() => handleNoteStore.removeNote(value.id)}
          >
            {value.text}
          </li>
        ))}
      </ul>
      <NewNoteForm />
    </div>
  ));
};
