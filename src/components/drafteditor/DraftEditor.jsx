import React from 'react'

import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../drafteditor/DraftEditor.scss'

import {InlineStyles, StyleMap} from './drafteditorbuttons/InlineStyles.js'
import BlockTypes from './drafteditorbuttons/BlockTypes.js'

import Filesaver from 'file-saver';
import { stateToMarkdown } from "draft-js-export-markdown";




function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  




const saveContentToFile = (event) => {
  event.preventDefault()
  const markdown = stateToMarkdown(
    editorState.getCurrentContent()
  )
  let filename = document.getElementById('filename').value;
  var blob = new Blob([markdown], {type: "text/plain;charset=utf-8"});
  Filesaver.saveAs (blob, filename);
}

      const setInlineStyle = (event) => {
        event.preventDefault();
        let style = event.currentTarget.getAttribute('data-style');
        setEditorState(RichUtils.toggleInlineStyle(editorState, style))}
      
      const renderInlineStyleButton = (value, style) => {
          const currentInlineStyle = editorState.getCurrentInlineStyle();
          let styleActive = '';
          if (currentInlineStyle.has(style)) {
            styleActive = 'active';
          }

          return (
              <input
                  type='button'
                  key={style}
                  value={value}
                  data-style={style}
                  onMouseDown={setInlineStyle}   
                  className={styleActive}
              />
            )
      }
      
      const setBlockType = (event) => {
        event.preventDefault();
        let type = event.currentTarget.getAttribute('data-block');
        setEditorState(RichUtils.toggleBlockType(editorState, type))}

        const renderBlockTypeButton = (value, block) => {

          const currentBlockType = RichUtils.getCurrentBlockType(editorState);
          let typeActive = '';
          if (currentBlockType === block) {
            typeActive = 'active'
          }

          return (
              <input
                  type='button'
                  key={block}
                  value={value}
                  data-block={block}
                  onMouseDown={setBlockType} 
                  className={typeActive}  
              />
            )
        }


        const markdownViewer = () => {
          const markdown = stateToMarkdown(
            editorState.getCurrentContent())
            return(
              <textarea 
                value={markdown}
              />
              
            ) 
        }
        



        return (
          <div className='col-sm-6 data-interval="false"; editor-general-appearance toolbar '>
            
           <div className='menu'>
            {BlockTypes.map((button) => {
            return renderBlockTypeButton(button.value, button.block);
            })} 

            <br />
            </div>
            <div className='menu'>
            {InlineStyles.map((button) => {
            return renderInlineStyleButton(button.value, button.style);
            })}
            </div>
         

          <div className="draft-editor-wrapper">
              <Editor
                  customStyleMap={StyleMap}
                  editorState={editorState}
                  onChange={setEditorState} 
                  placeholder="Click here to start writing..."
                  
                  />
              </div>
              <div id='markdown-viewer'>
                {markdownViewer()}
              </div>

              <input 
                  type='text'
                  id='filename'
                  placeholder=' insert filename.txt'
                />

            <input
                  type='button'
                  value= 'SAVE'
                  onMouseDown={saveContentToFile} 
                   
              />

          </div>
              );
            }
    

export default MyEditor