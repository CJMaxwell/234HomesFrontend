import { KeyBindingUtil, getDefaultKeyBinding } from 'draft-js';

export const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

export const findImageEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IMAGE';
  }, callback);
};

const { hasCommandModifier } = KeyBindingUtil;

export const keyBindingFn = (e) => {
  if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
    return 'editor-save';
  }

  return getDefaultKeyBinding(e);
};

export const blockStyleFn = (contentBlock) => {
  const type = contentBlock.getType();
  // if (type === 'blockquote') {
  //   return 'superFancyBlockquote';
  // }

  console.log({ type });

  return type;
};

export const LINK_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g;
