import { EditorState } from 'draft-js';
import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

export const BLOCK_TYPE_HEADINGS = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
];

interface ButtonProps {
  active?: boolean;
}
const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button<ButtonProps>`
  font-weight: bold;
  padding: 5px 20px;
  border: 1px solid black;

  ${({ active }) =>
    active &&
    css`
      background-color: red;
    `}
`;

interface ToolbarProps {
  onBoldClick: () => void;
  onUnderlineClick: () => void;
  onItalicClick: () => void;
  onLinethroughClick: () => void;
  onToggleBlockType: (type: string) => void;
  promptForLink: (event: MouseEvent<HTMLButtonElement>) => void;
  removeLink: (event: MouseEvent<HTMLButtonElement>) => void;
  editorState: EditorState;
}
const Toolbar: React.FC<ToolbarProps> = ({
  onBoldClick,
  onUnderlineClick,
  onItalicClick,
  onLinethroughClick,
  promptForLink,
  removeLink,
  onToggleBlockType,
  editorState,
}) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <Wrapper>
      <Button
        type="button"
        active={blockType === 'header-one'}
        onClick={() => {
          onToggleBlockType('header-one');
        }}
      >
        H1
      </Button>
      <Button
        type="button"
        active={blockType === 'header-two'}
        onClick={() => {
          onToggleBlockType('header-two');
        }}
      >
        H2
      </Button>
      <Button
        type="button"
        active={blockType === 'header-three'}
        onClick={() => {
          onToggleBlockType('header-three');
        }}
      >
        H3
      </Button>
      <Button type="button" onClick={onBoldClick}>
        B
      </Button>
      <Button type="button" onClick={onUnderlineClick} className="underline">
        U
      </Button>

      <Button type="button" onClick={onItalicClick} className="italic">
        I
      </Button>

      <Button type="button" onClick={onLinethroughClick} className="line-through">
        S
      </Button>
      <Button type="button" onMouseDown={promptForLink}>
        Add Link
      </Button>
      <Button type="button" onClick={removeLink}>
        Remove Link
      </Button>
      <Button type="button">IMG</Button>
      <Button type="button">List</Button>
    </Wrapper>
  );
};

export default Toolbar;
