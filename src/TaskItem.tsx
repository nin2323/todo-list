interface Task {
    text: string;
    isCompleted: boolean;
    id: number;
}

interface TaskItemProps {
    task: Task;
    onComplete: (taskId: number) => void;
    onDelete: (taskId: number) => void;
  }

  export const TaskItem = (props: TaskItemProps) => {
    const {task, onComplete, onDelete} = props;
    return (   
    <div className="task">
      <div>
        <input type="checkbox" onChange={() => onComplete(task.id)} checked={task.isCompleted} />
        <span className={task.isCompleted ? "completed" : ""}>{task.text}</span>
      </div>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
    );
  };