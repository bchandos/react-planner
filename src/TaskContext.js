import React, {useState, createContext} from 'react';

export const TaskContext = createContext();


export const TaskProvider = props => {
    const [tasks, setTasks] = useState([
        {
            name: 'Some fucking shit you gotta do',
            dueDate: '2020/01/01',
            description: 'Just endless amounts of garbage in your life that you are obligated to do'
        },
        {
            name: 'More shit, different day',
            dueDate: '1999/11/22',
            description: 'Mountains of horse shit.'
        }
    ]);
    return(
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}