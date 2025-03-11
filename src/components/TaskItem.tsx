import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import TaskProps from "../interfaces/taskProps";

const TaskItem: React.FC<TaskProps> = ({ id, content, columnId }) => {
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


  return (
    <div 
    ref={drag} 
    className={`p-2 mb-2 bg-gray-100 rounded ${isDragging ? "opacity-50 shadow-xl" : ""}`}>
      {content}
    </div>
  );
};

export default TaskItem;