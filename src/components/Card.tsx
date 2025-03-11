import React from "react"
import { CardProps } from "../interfaces/cardProps"
import { useDispatch } from "react-redux"
import { DropTargetMonitor,  useDrop } from "react-dnd";
import { moveTask } from "../state/card/cardStore";
import TaskItem from "./TaskItem";

const Card: React.FC<CardProps> = ({id, title, tasks}) => {
    const dispatch = useDispatch();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item: { id: string; columnId: string }) => {
        console.log("Task dropped:", item);
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
    </div>
  );
}

export default Card