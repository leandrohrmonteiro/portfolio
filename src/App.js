import React from 'react';
//import logo from './assets/logo/logoleo.svg';
import './App.css';




import {GlobalContextProvider} from './components/globalcontext/GlobalContext.js';
import HookHeader from './components/header/HookHeader.jsx';
import HookCaroussel from './components/caroussel/HookCaroussel.jsx';
import HookPersonal from './components/personal/HookPersonal.jsx';
import MyEditor from './components/drafteditor/DraftEditor.js'




function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <HookHeader />
        <div className='row'>
          <HookCaroussel />
          <HookPersonal />
        </div>
        <MyEditor />
      </div>
    </GlobalContextProvider>
 
     
      
  
  );
}

export default App;
