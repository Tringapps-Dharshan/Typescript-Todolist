import { useState } from 'react'
import DisplayTasks from './DisplayTasks';
import CompletedTasks from './CompletedTasks';
import { TextField, Button } from '@mui/material';

import '../App.css'

type Task = {
    name: string,
    checked: boolean,
    edit: boolean
}[]

function AddTask() {
    const [tasks, setTasks] = useState<Task>([]);
    const [taskToAdd, setTaskToAdd] = useState('');
    function addTask() {
        if (taskToAdd.trim().length === 0) {
            alert('Enter task.')
        }
        else {
            setTasks((old) => [...old, { name: taskToAdd, checked: false, edit: false }]);
            setTaskToAdd('');
        }
    }
    return (
        <div className='homepage'>
            <div className='header'>
                <h1>To-Do-List</h1>
            </div>
            <div className='add-task'>
                <TextField
                    label="Enter task"
                    variant="outlined" value={taskToAdd}
                    onChange={(e) => setTaskToAdd(e.target.value)}
                />
                <Button onClick={() => addTask()} variant="contained" color='primary'>Add</Button>
            </div>
            <CompletedTasks tasks={tasks} setTasks={setTasks}/>
            <DisplayTasks tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default AddTask