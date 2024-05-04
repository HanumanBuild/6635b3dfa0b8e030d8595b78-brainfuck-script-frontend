import React, { useState } from 'react';

const ScriptForm = ({ onSubmit }) => {
    const [script, setScript] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(script);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Enter Brainfuck code here"
                rows="10"
                cols="50"
            />
            <button type="submit">Execute</button>
        </form>
    );
};

export default ScriptForm;