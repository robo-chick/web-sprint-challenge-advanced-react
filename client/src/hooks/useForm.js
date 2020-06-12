import {useState} from 'react';

export const useForm = (initialValue) => {
    const handleChanges = (e) => {
        setValues({...initialValue, [e.target.name]: e.target.value});
    };

    return [values, handleChanges];
}
