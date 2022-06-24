import { useState } from 'react'
import DisplayTasks from './DisplayTasks';
import CompletedTasks from './CompletedTasks';
import {v4 as uuid} from 'uuid'
import { TextField, Button} from '@mui/material';

import '../App.css'

type Task = {
    id: string,
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
            setTasks((old) => [...old, { id: uuid(), name: taskToAdd, checked: false, edit: false }]);
            setTaskToAdd('');
        }
    }
    return (
        <div>
            <div>
                <h2 className='header-text'>
                    THINGS TO DO:
                </h2>
            </div>
            <div className='display-task'>
                {tasks.length !== 0 ? <DisplayTasks tasks={tasks} setTasks={setTasks} /> : "Looks like you're absolutely free today"}
            </div>
            <CompletedTasks tasks={tasks} setTasks={setTasks} />
            <div className='add-task'>
                <TextField
                    label="Enter task"
                    size='small'
                    variant="outlined" value={taskToAdd}
                    onChange={(e) => setTaskToAdd(e.target.value)}
                />
                <Button onClick={() => addTask()} variant="contained" color='primary'>Add</Button>
            </div>
        </div>
    )
}

export default AddTask