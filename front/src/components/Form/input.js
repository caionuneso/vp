import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiDivide } from 'react-icons/fi';

export default function Input({ name }) { //fildName é o nome final do input
    const inputRef = useRef(null);
    const {fieldName, registerField, defaultValue, error} = useField ( name );

    useEffect(() => {
        console.log(input.current);
    }, [InputRef]);

    return (
        <input ref={inputRef}/> 

    );
}

