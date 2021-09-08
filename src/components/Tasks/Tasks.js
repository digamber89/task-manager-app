import Task from "./Task";
import {useTask} from "../../TaskProvider";

const Tasks = ({onToggleReminder, onRemoveTask}) => {
    const tasks = useTask();
    return (
        <ul className={"task-list"}>

            {
                tasks.length > 0 ?
                    tasks.map((task) => <li className={"task"} key={task.id}>
                        <Task key={task.id} task={task}/>
                    </li>) : (<h3>Congratulations All Tasks Completed</h3>)
            }

        </ul>
    );
}

export default Tasks;