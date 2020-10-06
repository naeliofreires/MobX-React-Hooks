import React from "react";

import Notes from "./components/Notes";

import { NotesProvider } from "./stores/NotesStore";

import "./styles.css";

const App = () => {
  return (
    <div>
      <NotesProvider>
        <h1>Mobx and Hooks</h1>

        <Notes />
      </NotesProvider>
    </div>
  );
};

export default App;
