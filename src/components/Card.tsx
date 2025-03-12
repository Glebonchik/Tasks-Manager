import React, { useState } from "react"
import { CardProps } from "../interfaces/cardProps"
import { useDispatch } from "react-redux"
import { DropTargetMonitor,  useDrop } from "react-dnd";
import { moveTask, appendTask } from "../state/card/cardStore";
import TaskItem from "./TaskItem";

const Card: React.FC<CardProps> = ({id, title, tasks}) => {
    const [formStatus, setFormStatus] = useState(false);
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item: { id: string; columnId: string }) => {
          dispatch(
            moveTask({
              taskId: item.id,
              sourceColumnId: item.columnId,
              destinationColumnId: id, 
            })
          );
        },
        collect: (monitor: DropTargetMonitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

      const handleAppendTask = () => {
        if (newTask.trim() !== ""){
          dispatch(appendTask({sourceColumnId: id, content: newTask}));
          setNewTask("");
          setFormStatus(false);
      }
      }

  return (
  <div ref={drop} className={`border-4 border-double border-blue-500 rounded-lg p-4 ${isOver ? "bg-gray-200" : ""}`}>
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="mt-4">
        {tasks.map((task) => (
          <TaskItem 
          key={`${task.id}-${id}`}
          id={task.id} 
          content={task.content} 
          columnId={id} />
        ))}
      </div>
      <button onClick={() => setFormStatus(true)}>+</button>
      {formStatus && (
        <div className="absolute ">
                         <form
                 onSubmit={(e) => {
                     e.preventDefault(); 
                     handleAppendTask();
                 }}
             >
                 <input
                     type="text"
                     value={newTask}
                     onChange={(e) => setNewTask(e.target.value)}
                     placeholder="Введите новую задачу"
                     className="border-2 border-gray-300 p-2 mb-2 w-full"
                 />
                 <div className="flex justify-end">
                     <button
                         type="submit"
                         className="text-[0.75em] rounded border-1 p-1 bg-green-200"
                     >
                         Добавить
                     </button>
                     <button
                         type="button"
                         className="text-[0.75em] rounded border-1 p-1 ml-2 bg-gray-200"
                         onClick={() => setFormStatus(false)}
                     >
                         Отмена
                     </button>
                 </div>
             </form>
        </div>
      )}
    </div>
  );
}

export default Card