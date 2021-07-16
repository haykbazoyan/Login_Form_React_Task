import React from 'react'

export default function Input({ type, inputName, onChange }) {
    return (
        <label>
            { `${inputName}: ` }
            <input type={type} onChange={onChange} />
        </label>
    );
}