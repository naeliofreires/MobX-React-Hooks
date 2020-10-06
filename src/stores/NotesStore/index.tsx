import * as React from "react";
import { nanoid } from "nanoid";
import { useLocalStore } from "mobx-react";

interface Note {
  id: string;
  text: string;
}

interface StoreNoteProvider {
  notes: Array<Note>;
  addNote(text: string): void;
  removeNote(id: string): void;
}

const NotesContext = React.createContext<StoreNoteProvider | null>(null);

export const NotesProvider: React.FC = ({ children }) => {
  const buildStore = (): StoreNoteProvider => ({
    notes: [],
    addNote(text: string) {
      this.notes.push({
        text,
        id: nanoid()
      });
    },
    removeNote(id: string) {
      this.notes = this.notes.filter((note: Note) => note.id !== id);
    }
  });

  const store = useLocalStore<StoreNoteProvider>(() => buildStore());

  return (
    <NotesContext.Provider value={store}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => React.useContext(NotesContext);
