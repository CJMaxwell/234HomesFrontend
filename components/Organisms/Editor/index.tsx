/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import styled from 'styled-components';

import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Div = styled.div`
  .wrapper-class {
    padding: 1rem;
  }
  .editor-class {
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .toolbar-class {
    border: 1px solid #ccc;
  }
`;
const Editor: React.FC = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    console.log(currentContentAsHTML);
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const onSave = () => {
    // Saving ...
  };

  const onPublish = () => {
    // Publishing ...
  };

  const onDelete = () => {
    // Deleting...
  };

  return (
    <Div>
      <DraftEditor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </Div>
  );
};

export default Editor;
