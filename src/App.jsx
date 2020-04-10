import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_dark.css';
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectDetail/>
      </header>
    </div>
  );
}

export default App;
