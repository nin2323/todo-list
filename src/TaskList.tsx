import { TaskItem } from "./TaskItem";

interface Task {
    text: string;
    isCompleted: boolean;
    id: number;
}

interface TaskListProps {
    tasks: Task[];
    onCompleteTask: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}

export const TaskList = (props: TaskListProps) => {
    const {tasks, onCompleteTask, onDeleteTask} = props;
    return (
        <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onComplete={onCompleteTask} onDelete={onDeleteTask} />
        ))}
      </div>
    );
};