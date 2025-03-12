import React, { useState } from "react"
import { CardProps } from "../interfaces/cardProps"
import { useDispatch } from "react-redux"
import { DropTargetMonitor,  useDrop } from "react-dnd";
import { moveTask, appendTask, deleteColumn } from "../state/card/cardStore";
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

      const handleDeleteColumn = () => {
        dispatch(deleteColumn({id: id}))
      }

      return (
        <div ref={drop} className={`border-4 border-double border-blue-500 rounded-lg p-4 ${isOver ? "bg-gray-200" : ""} relative`}>
          <button onClick={handleDeleteColumn} className="absolute top-2 right-2 text-red-500 text-xl cursor-pointer">
            &times;
          </button>
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="mt-4">
            {tasks.map((task) => (
              <TaskItem 
                key={`${task.id}-${id}`}
                id={task.id} 
                content={task.content} 
                columnId={id} 
              />
            ))}
          </div>
      
          <div className="flex justify-center mt-4">
            <button onClick={() => setFormStatus(true)} className="cursor-pointer text-3xl font-bold">+</button>
          </div>

          {formStatus && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
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