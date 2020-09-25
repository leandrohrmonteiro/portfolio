import React from 'react'

import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../drafteditor/DraftEditor.scss'

class MyEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = editorState => this.setState({editorState});
      this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

      
    }
  
   
      toggleInlineStyle(event) {
        event.preventDefault();
        let style = event.currentTarget.getAttribute('data-style');
        this.setState({
          editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
        });
      }
    
    
      render() {
        return (
          <div className='editor-general-appearance'>

        <input
          type="button"
          value="Italic"
          data-style="ITALIC"
          onMouseDown={this.toggleInlineStyle}
        />

        <input
          type="button"
          value="underline"
          data-style="UNDERLINE"
          onMouseDown={this.toggleInlineStyle}
        />

    <div className="draft-editor-wrapper">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange} />
        </div>
            
          </div>
        );
      }
    }

export default MyEditor