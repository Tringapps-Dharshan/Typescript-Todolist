import { useState } from 'react'
import '../App.css'
import { Typography, Checkbox, IconButton, TextField, Grid } from '@mui/material';
import { red, blue, grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

type Task = {
    name: string,
    checked: boolean,
    edit: boolean
}

type SetTask = {
    tasks: Task[],
    setTasks: (Taskset: Task[]) => void
}

function DisplayTasks({ tasks, setTasks }: SetTask) {
    const Data = tasks;
    const [newTask, setNewTask] = useState('');
    function editText() {
        return (
            <TextField
                label="Edit task"
                variant="standard"
                value={newTask}
                onChange={(e) => { setNewTask(e.target.value) }}
            />
        );
    }
    function edittasks(task: Task) {
        task.edit = !task.edit;
        setTasks([...tasks]);
        setNewTask(task.name);
    }
    function saveNewTask(task: Task) {
        if (newTask.length === 0) {
            alert('Cannot add empty task.');
        } else {
            task.name = newTask;
            setTasks([...tasks]);
            task.edit = !task.edit;
            setTasks([...tasks]);
        }
    }
    function deleteTasks(taskToDelete: string) {
        const deletedTasks = Data.filter((task) => { return task.name !== taskToDelete });
        setTasks(deletedTasks);
    };
    const handleChange = (task: Task) => {
        task.checked = !task.checked;
        setTasks([...tasks]);
    }
    return (
        <div>
            {
                Data.map((task) => {
                    return (
                        <Grid container key={task.name} className="display-tasks">
                            <Grid item xs={0.3} sx={{ textAlign: 'left' }}>
                                <Checkbox
                                    onChange={() => handleChange(task)}
                                    color="success"
                                    disabled={task.edit && true}
                                />
                            </Grid>
                            <Grid item xs={11} sx={{ textAlign: 'left' }}>
                                <Typography
                                    className={task.checked ? "strikeout" : ""}
                                    variant="h6" key={task.name}
                                    sx={{ padding: '0 10px' }}
                                >
                                    {!task.edit && task.name}
                                    {task.edit && editText()}
                                </Typography>
                            </Grid>
                            <Grid item xs={0.3} sx={{ display: 'flex', justifyContent: "end" }}>
                                {!task.edit && <IconButton
                                    sx={{ display: 'flex' }}
                                    disabled={task.checked && true}
                                    onClick={() => edittasks(task)}
                                >
                                    <EditIcon sx={{ color: !task.checked ? blue[900] : grey[400] }} />
                                </IconButton>}
                                {
                                    task.edit && <IconButton
                                        onClick={() => saveNewTask(task)}
                                    >
                                        <DoneIcon
                                            color="success"
                                        />
                                    </IconButton>
                                }
                                <IconButton
                                    sx={{ display: 'flex' }}
                                    disabled={task.checked || task.edit}
                                    onClick={() => deleteTasks(task.name)}
                                >
                                    <DeleteIcon sx={{ color: !task.checked ? !task.edit ? red[900] : grey[400] : grey[400] }}
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </div>
    )
}
export default DisplayTasks;