import {useState} from "react";

const AddTaskForm = ({onAddTask}) => {
    const [formFields, setFormFields] = useState({
        'title': '',
        'description': '',
        'reminder': false
    });

    const onFormInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormFields((prevFormFields) => {
            const modifiedFormFields = {
                [name]: value
            };
            return {...prevFormFields, ...modifiedFormFields}
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        onAddTask(formFields)
        setFormFields({
            'title': '',
            'description': '',
            'reminder': false
        });
    }

    return (
        <form action='/' onSubmit={onFormSubmit}>
            <div className={'form-control'}>
                <label htmlFor={"title"}>Task Name</label>
                <input type={"text"} id={"title"} name={"title"} value={formFields.title}
                       onChange={onFormInputChange}
                />
            </div>
            <div className={'form-control'}>
                <label htmlFor={"description"}>Task Details</label>
                <textarea id={"description"} name={"description"} value={formFields.description}
                          onChange={onFormInputChange}
                />
            </div>
            <div className={'form-control'}>
                <label htmlFor={"reminder"}>Task Reminder</label>
                <input type={"checkbox"} id={"reminder"} name={"reminder"} checked={formFields.reminder}
                       onChange={onFormInputChange}
                />
            </div>
            <div className="form-control">
                <input type={"submit"} value={"Add Task"}/>
            </div>
        </form>
    );
}

export default AddTaskForm;