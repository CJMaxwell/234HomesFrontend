import { RawDraftContentState } from 'draft-js';
import useEditor from '../../hooks/useEditor';
import Editor from '../Organisms/Editor';

const offlineStorageKey = 'unsaved:content';

const CreateStory: React.FC = () => {
  const initialContent: RawDraftContentState = JSON.parse(
    sessionStorage.getItem(offlineStorageKey),
  );

  const initialData = {
    title: '',
    banner: null,
    body: initialContent,
    featured: false,
  };

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

export default CreateStory;
