import { EditorState, convertFromRaw, convertToRaw, RawDraftContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import { useState, useEffect } from 'react';
import useStories from './useStories';

const offlineStorageKey = 'unsaved:content';
const initialData: RawDraftContentState = JSON.parse(sessionStorage.getItem(offlineStorageKey));

const useEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    return initialData
      ? EditorState.createWithContent(convertFromRaw(initialData))
      : EditorState.createEmpty();
  });
  const [isDirty, setIsDirty] = useState(false);
  const [featuredImg, setFeaturedImg] = useState<any>(null);
  const { addStory, loading } = useStories();

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    return currentContentAsHTML as string;
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    setIsDirty(true);
  };

  const clearOfflineData = () => {
    sessionStorage.removeItem(offlineStorageKey);
  };

  const storeOffline = (state: EditorState) => {
    sessionStorage.setItem(
      offlineStorageKey,
      JSON.stringify(convertToRaw(state.getCurrentContent())),
    );
    setIsDirty(false);
  };

  const handleSaveDraft = (metaData: { title: string; featured: boolean }) => {
    const body = convertContentToHTML();
    addStory(featuredImg, { ...metaData, status: 'draft', body });
    setIsDirty(false);
    clearOfflineData();
  };

  const handlePublish = (metaData: { title: string; featured: boolean }) => {
    const body = convertContentToHTML();
    addStory(featuredImg, { ...metaData, status: 'published', body });
    setIsDirty(false);
    clearOfflineData();
  };

  const handleDelete = () => {
    clearOfflineData();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDirty) {
        console.log('hey');

        storeOffline(editorState);
      }
    }, 5000); // Every one minute
    return () => clearInterval(interval);
  }, [isDirty]);

  return {
    editorState,
    handleEditorChange,
    handleSaveDraft,
    handlePublish,
    handleDelete,
    featuredImg,
    setFeaturedImg,
    loading,
  };
};

export default useEditor;
