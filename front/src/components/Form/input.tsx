import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core'

interface Props extends InputHTMLAttributes <HTMLInputElement> {
    name: string;
    type: string;
};

export default function Input ( {name, ...rest}:Props) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <input ref={inputRef} {...rest} />
    );
}