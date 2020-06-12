import {useState, useEffect} from 'react';

export const useDarkMode = (intialValue) => {
    const [values, setValues] = useState(initialValue);

    useEffect(() => {
        values ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [values]);

    return [values, setValues];
}