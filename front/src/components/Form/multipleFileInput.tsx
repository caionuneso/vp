import React, { useRef, useEffect }  from 'react';

import { useField } from '@unform/core';

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const MultipleFileInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
      },
    })
  }, [fieldName, registerField]);

  return (
    <>
      <input 
        multiple
        type="file" 
        ref={inputRef} 
        {...rest}
      />
    </>
  );
};

export default MultipleFileInput;