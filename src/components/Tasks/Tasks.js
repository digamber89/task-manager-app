import Task from "./Task";

const Tasks = ({tasks, onToggleReminder, onRemoveTask}) => {
    return (
        <ul className={"task-list"}>

            {
                tasks.length > 0 ?
                tasks.map((task) => <li className={"task"} key={task.id}>
                    <Task task={task}
                          onToggleReminder={onToggleReminder}
                          onRemoveTask={onRemoveTask}
                    />
                </li>) : (<h3>Congratulations All Tasks Completed</h3>)
            }

        </ul>
    );
}

export default Tasks;