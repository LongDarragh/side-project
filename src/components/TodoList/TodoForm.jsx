import React, { useState} from 'react';

const TodoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        addTask();
        setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Sumbit</button>
        </form>
    );
};

export default TodoForm;