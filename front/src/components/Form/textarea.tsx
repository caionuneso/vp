import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core'

interface Props {
    name: string;
};

export default function Textarea ({ name }: Props) {
    const textareaRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <textarea ref={textareaRef} />
    );
}