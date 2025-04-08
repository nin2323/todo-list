import { ChangeEvent } from "react";
interface TaskInputPops {
    taskText: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onAddTask: any;
}

export const TaskInput = (props: TaskInputPops) => {
    const {taskText, onInputChange, onAddTask} = props;

    return (
      <div className="add-task">
        <input type="text" onInput={onInputChange} value={taskText} />
        <button className="button" onClick={onAddTask} >Añadir tarea</button>
      </div>
    );
};