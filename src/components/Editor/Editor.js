import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { monacoEditor as monaco } from 'utils';
import { useMount, useUpdate } from 'utils/hooks';

import config from 'config';

import useStyles from './useStyles';
import classNames from 'classnames';

const Editor =
  ({ value, language, theme, options, editorDidMount, line }) =>
{
  const [isLoading, setIsLoading] = useState(true);
  const editorRef = useRef();
  const monacoRef = useRef();
  const containerRef = useRef();

  const classes = useStyles();

  useMount(_ => {
    monaco
      .init()
      .then(monaco => (monacoRef.current = monaco) && createEditor());

    return removeEditor;
  });

  useUpdate(_ => {
    editorRef.current.setValue(value);
  }, [value]);

  useUpdate(_ => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language]);

  useUpdate(_ => {
    editorRef.current.setScrollPosition({ scrollTop: line });
  }, [line]);

  useUpdate(_ => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme]);

  function createEditor() {
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      value,
      language,
      automaticLayout: true,
      ...options,
    });

    editorDidMount &&
    editorDidMount(editorRef.current.getValue.bind(editorRef.current), editorRef.current);

    theme && monacoRef.current.editor.setTheme(theme);

    setIsLoading(false);
  }

  function removeEditor() {
    editorRef.current.dispose();
  }

  return (
    <section className={classNames('full-size', classes.wrapper)}>
      {isLoading && <div className={classes.preloader}>
        <CircularProgress
          size={100}
          color="primary"
        />
      </div>}
      <div
        ref={containerRef}
        className="full-size"
      />
    </section>
  );
}

Editor.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string,
  options: PropTypes.object,
  editorDidMount: PropTypes.func,
  theme: PropTypes.string,
};

Editor.defaultProps = {
  ...config.editor,
  options: {},
  editorDidMount: _ => {}
};

export default Editor;
