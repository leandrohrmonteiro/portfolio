import React, { useContext }from 'react';
import { GlobalContext } from "./components/globalcontext/GlobalContext.js";
//import logo from './assets/logo/logoleo.svg';
import './App.css';





import HookHeader from './components/header/HookHeader.jsx';
import HookCaroussel from './components/caroussel/HookCaroussel.jsx';
import HookPersonal from './components/personal/HookPersonal.jsx';
import MyEditor from './components/drafteditor/DraftEditor.jsx'
import MyEditorInfo from './components/drafteditor/DraftEditorInfo.jsx'




function App() {

  const [globalContext] = useContext(GlobalContext);

const landingPage = () => {
  return(
    <div className="App">
      <HookHeader />
      <div className='row'>
        <HookCaroussel />
        <HookPersonal />
      </div>
    </div>
 )
}

const projectDraftEditor = () => {
  console.log(`global render is: ${globalContext.render}`)
  return(
    <div className="App">
      <HookHeader />
      
      <div className='project'>
        <div className='row'>
          <MyEditor />
          <MyEditorInfo />
        </div>
      </div> 
    </div>
  )
}

const appRender = () => {
  if (globalContext.render === 'landingPage') {return( landingPage())};
  if (globalContext.render === 'projectDraftEditor') {return( projectDraftEditor())}
}

  return (
    
 appRender()
     
      
  
  );
}

export default App;
