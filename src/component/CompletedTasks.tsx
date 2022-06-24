type Task = {
    id: string,
    name: string,
    checked: boolean,
    edit: boolean
}

type SetTask = {
    tasks: Task[],
    setTasks: (Taskset: Task[]) => void
}


function CompletedTasks({tasks}:SetTask) {
    let count=0;
    const Data=tasks;
    Data.forEach(task => {
        if(task.checked === true){
            count++;
        }
    });
  return (
    <div>
        <p className='completed-tasks'>DONE : {count}</p>
    </div>
  )
}

export default CompletedTasks