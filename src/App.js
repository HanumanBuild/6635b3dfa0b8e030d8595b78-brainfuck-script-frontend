import React, { useState } from 'react';
import ScriptForm from './components/ScriptForm';
import axios from 'axios';

const App = () => {
    const [output, setOutput] = useState('');

    const executeScript = async (script) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BRAINFUCK_SCRIPT_BACKEND_URL}/execute`, { script });
            setOutput(response.data.output);
        } catch (error) {
            console.error('Error:', error);
            setOutput('Error executing script.');
        }
    };

    return (
        <div>
            <h1>Brainfuck Interpreter</h1>
            <ScriptForm onSubmit={executeScript} />
            <h2>Output:</h2>
            <pre>{output}</pre>
        </div>
    );
};

export default App;