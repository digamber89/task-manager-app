import {FaTimes, FaBell, FaRegBell} from "react-icons/fa";
import {useTaskUpdate} from "../../TaskProvider";

const Task = ({task}) => {
    const {title, id, description, reminder} = task;
    const modifyTask = useTaskUpdate();
    const removeTask = (id) => {
        modifyTask({
            type: 'remove',
            id: id
        })
    }
    const toggleReminder = (id) => {
        modifyTask({
            id: id,
            type: 'toggleReminder'
        })
    }
    return (
        <>
            <div className={"task-header"}>
                <div className="task-reminder">
                    {
                        reminder ? <FaBell color={'green'} onDoubleClick={() => toggleReminder(id)}/> : <FaRegBell onDoubleClick={() => toggleReminder(id)}/>
                    }
                </div>
                <h2 className={id}>{title}</h2>
                <FaTimes className={"removeTask"} color={"red"} onClick={() => removeTask(id)}/>
            </div>

            <p>{description}</p>
        </>
    );
}

export default Task;