import React from 'react';
import './TaskForm.css';

function TaskForm() {
    return (
        <div>
            <h3>Add new task</h3>
            <form>
                <input className="TaskForm-text-input" type="text" name="newTaskItem"/>
            </form>
        </div>
    )
}

export default TaskForm;