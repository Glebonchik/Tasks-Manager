import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import TaskProps from "../interfaces/taskProps";
import { deleteTask } from "../state/card/cardStore";
import { useDispatch } from "react-redux";

const TaskItem: React.FC<TaskProps> = ({ id, content, columnId }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id, columnId },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    options: {
      dropEffect: "move", 
    },
  }), []);

  const handleDeleteTask = () => {
    dispatch(deleteTask({ taskId: id, sourceColumnId: columnId }));
  }

  return (
    <div 
    ref={drag} 
    className={`flex justify-between min-w-[7rem] p-2 mb-2 bg-gray-100 rounded ${isDragging ? "opacity-50 shadow-xl" : ""}`}>
      <span>
      {content}
      </span>
      <button onClick={handleDeleteTask} className="text-red-500 cursor-pointer">&times;</button>
    </div>
  );
};

export default TaskItem;