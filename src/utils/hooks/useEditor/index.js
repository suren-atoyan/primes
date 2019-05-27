// WARNING: this hack just to be able to use
// monaco value getter in other components
// also. In general, it's not normal usage
// of hooks, and it's totally workaround.
// Don't use this hook in any other place

import { useState } from 'react';

let getEditorValue;

const useEditor = _ => {
  const [getter, setGetter] = useState(getEditorValue);

  !getEditorValue && (getEditorValue = getter);

  return [getEditorValue, setGetter];
};

export default useEditor;
