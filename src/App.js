import React from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Buttons from './Components/Buttons/Buttons';
import MemesWrapper from './Components/MemesWrapper/MemesWrapper';
import Footer from './Components/Footer/Footer';
import PreviewWrapper from './Components/PreviewWrapper/PreviewWrapper';
import EditorWrapper from './Components/EditorWrapper/EditorWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        
        <div className="PanelsWrapper">
          <MemesWrapper />
          <div className="Panel">
            <PreviewWrapper />
          </div>
          <div className="Panel">
            <EditorWrapper />
            <Buttons />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
