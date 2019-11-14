import React, {useState, createContext} from 'react';

export const TaskContext = createContext();


function TaskProvider(props) {
    const [tasks, setTasks] = useState([
        {
            name: 'Really Important Thing',
            dueDate: '2019-12-01',
            description: 'You must do this important thing in a reasonable amount of time.',
            completed: false
        },
        {
            name: 'Very Important Thing',
            dueDate: '2020-01-22',
            description: 'You must also do this important thing in a slightly less reasonable amount of time.',
            completed: true
        }
    ]);
    return(
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;