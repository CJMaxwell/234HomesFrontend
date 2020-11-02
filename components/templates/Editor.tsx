import React, { useCallback, useMemo, useState } from 'react';
import { createEditor, Editor as SlateEditor, Transforms, Text } from 'slate';
import {
  Slate,
  Editable,
  withReact,
  RenderLeafProps,
  RenderElementProps,
  useSlate,
} from 'slate-react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3rem;
`;
const H2 = styled.h2`
  font-size: 2.5rem;
`;
const H3 = styled.h3`
  font-size: 2rem;
`;
const Center = styled.div`
  text-align: center;
`;
const Right = styled.div`
  text-align: right;
`;
const Left = styled.div`
  text-align: left;
`;

const ToolbarBtn = styled.button<{ active?: boolean }>`
  color: ${({ active, theme }) => (active ? theme.colors.orange1 : theme.colors.black)};
  padding: 0.5rem;

  &:not(:last-child) {
    padding-left: 1rem;
  }
`;

const CustomEditor = {
  isH1Active(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'h1',
    });

    return !!match;
  },

  isH2Active(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'h2',
    });

    return !!match;
  },

  isH3Active(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'h3',
    });

    return !!match;
  },

  isCenterActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'center',
    });

    return !!match;
  },

  isRightActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'right',
    });

    return !!match;
  },

  isLeftActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.type === 'left',
    });

    return !!match;
  },

  isBoldMarkActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isUnderlineMarkActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.underline === true,
      universal: true,
    });

    return !!match;
  },

  isLineThroughMarkActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.lineThrough === true,
      universal: true,
    });

    return !!match;
  },

  isItalicMarkActive(editor: SlateEditor) {
    // @ts-ignore
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => n.italic === true,
      universal: true,
    });

    return !!match;
  },

  toggleBoldMark(editor: SlateEditor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleItalicMark(editor: SlateEditor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleLineThroughMark(editor: SlateEditor) {
    const isActive = CustomEditor.isLineThroughMarkActive(editor);
    Transforms.setNodes(
      editor,
      { lineThrough: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleUnderlineMark(editor: SlateEditor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleH1Block(editor: SlateEditor) {
    const isActive = CustomEditor.isH1Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'h1' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },

  toggleH2Block(editor: SlateEditor) {
    const isActive = CustomEditor.isH2Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'h2' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },

  toggleH3Block(editor: SlateEditor) {
    const isActive = CustomEditor.isH3Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'h3' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },

  toggleCenterBlock(editor: SlateEditor) {
    const isActive = CustomEditor.isH3Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'center' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },

  toggleRightBlock(editor: SlateEditor) {
    const isActive = CustomEditor.isH3Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'right' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },

  toggleLeftBlock(editor: SlateEditor) {
    const isActive = CustomEditor.isH3Active(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'left' },
      { match: (n) => SlateEditor.isBlock(editor, n) },
    );
  },
};

const Heading1: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <H1 {...attributes}>{children}</H1>;
};
const Heading2: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <H2 {...attributes}>{children}</H2>;
};
const Heading3: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <H3 {...attributes}>{children}</H3>;
};
const CenterBlock: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <Center {...attributes}>{children}</Center>;
};
const LeftBlock: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <Left {...attributes}>{children}</Left>;
};
const RightBlock: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <Right {...attributes}>{children}</Right>;
};

const DefaultElement: React.FC<RenderElementProps> = ({ attributes, children }) => {
  return <p {...attributes}>{children}</p>;
};

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  let textDecoration = 'none';
  if (leaf.underline) {
    textDecoration = 'underline';
  }
  if (leaf.lineThrough) {
    textDecoration = 'line-through';
  }

  if (leaf) {
    return (
      <span
        {...attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          fontStyle: leaf.italic ? 'italic' : 'normal',
          // @ts-ignore
          textDecoration,
        }}
      >
        {children}
      </span>
    );
  }

  return <></>;
};

const ToolBar: React.FC = () => {
  const editor = useSlate();
  const [image, setImage] = useState('');
  const [imageInputActive, toggleImageInput] = useState(false);

  return (
    <div className="bg-red-100">
      <ToolbarBtn
        type="button"
        active={CustomEditor.isH1Active(editor)}
        className="font-bold"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleH1Block(editor);
        }}
      >
        H1
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        active={CustomEditor.isH2Active(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleH2Block(editor);
        }}
      >
        H2
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        active={CustomEditor.isH3Active(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleH3Block(editor);
        }}
      >
        H3
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        active={CustomEditor.isBoldMarkActive(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
      >
        B
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        active={CustomEditor.isItalicMarkActive(editor)}
        className="italic font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleItalicMark(editor);
        }}
      >
        I
      </ToolbarBtn>

      <ToolbarBtn
        type="button"
        active={CustomEditor.isUnderlineMarkActive(editor)}
        className="underline font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleUnderlineMark(editor);
        }}
      >
        U
      </ToolbarBtn>

      <ToolbarBtn
        type="button"
        active={CustomEditor.isLineThroughMarkActive(editor)}
        className="underline font-bold bg-red-100 line-through"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleLineThroughMark(editor);
        }}
      >
        S
      </ToolbarBtn>

      <ToolbarBtn
        type="button"
        active={CustomEditor.isLeftActive(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleLeftBlock(editor);
        }}
      >
        L
      </ToolbarBtn>

      <ToolbarBtn
        type="button"
        active={CustomEditor.isCenterActive(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleCenterBlock(editor);
        }}
      >
        C
      </ToolbarBtn>

      <ToolbarBtn
        type="button"
        active={CustomEditor.isRightActive(editor)}
        className="font-bold bg-red-100"
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleRightBlock(editor);
        }}
      >
        R
      </ToolbarBtn>

      <div className="relative inline-block">
        <ToolbarBtn
          type="button"
          className="font-bold bg-red-100"
          onMouseDown={(event) => {
            event.preventDefault();
            toggleImageInput(!imageInputActive);
          }}
        >
          IMG
        </ToolbarBtn>

        {imageInputActive && (
          <div className="absolute bottom-auto bg-blue-600 p-4">
            <input
              type="text"
              placeholder="Image URL"
              onChange={({ target: { value } }) => {
                setImage(value);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Editor: React.FC<{ readonly?: boolean }> = ({ readonly = false }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Begin your story here.' }],
    },
  ]);

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'h1':
        return <Heading1 {...props} />;
      case 'h2':
        return <Heading2 {...props} />;
      case 'h3':
        return <Heading3 {...props} />;
      case 'center':
        return <CenterBlock {...props} />;
      case 'right':
        return <RightBlock {...props} />;
      case 'left':
        return <LeftBlock {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const className = readonly ? '' : 'px-4 py-2';

  return (
    // @ts-ignore
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      {!readonly && <ToolBar />}
      <div className={className}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} readOnly={readonly} />
      </div>
    </Slate>
  );
};

export default Editor;
