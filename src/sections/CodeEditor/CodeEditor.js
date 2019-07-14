import React from 'react';

import { useStore } from 'store';
import { useEditor } from 'utils/hooks';
import Editor from '@monaco-editor/react';

import Paper from '@material-ui/core/Paper';

import { ensureLastLine } from 'utils';

const CodeEditor = _ => {
  const [, setGetter] = useEditor();
  const {
    state: { customSequence: { formula }, themeMode, execLanguage },
    actions: { setIsEditorReady }
  } = useStore();

  function editorDidMount(getter) {
    setGetter(_ => getter);
    setIsEditorReady(true);
  }

  return <Paper className="full-size">
    <Editor
      value={ensureLastLine(formula)}
      language={execLanguage}
      editorDidMount={editorDidMount}
      theme={themeMode}
    />
  </Paper>;
};

export default CodeEditor;
