import { RawDraftContentState } from 'draft-js';

import useEditor from '../../hooks/useEditor';

import Editor from '../Organisms/Editor';

const offlineStorageKey = 'unsaved:content';

interface InitialData {
  banner?: File;
  title?: string;
  featured?: boolean;
  body?: RawDraftContentState;
}

const EditStory: React.FC<{ initialData?: InitialData }> = ({ initialData }) => {
  const {
    loading,
    handlePublish,
    handleSaveDraft,
    handleEditorChange,
    editorState,
    featuredImg,
    setFeaturedImg,
    initialMetaData,
  } = useEditor(initialData, offlineStorageKey);

  return (
    <Editor
      loading={loading}
      handlePublish={handlePublish}
      handleSaveDraft={handleSaveDraft}
      handleEditorChange={handleEditorChange}
      editorState={editorState}
      featuredImg={featuredImg}
      setFeaturedImg={setFeaturedImg}
      initialMetadata={initialMetaData}
    />
  );
};

export default EditStory;
