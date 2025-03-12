import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {BoardState} from '../../interfaces/columns';

const initialState: BoardState = {
    columns: [
      {
        id: "column-1",
        title: "To Do",
        tasks: [
          { id: "task-1", content: "Task 1" },
          { id: "task-2", content: "Task 2" },
        ],
      },
      {
        id: "column-2",
        title: "In Progress",
        tasks: [
          { id: "task-3", content: "Task 3" },
        ],
      },
    ],
  };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<{taskId: string, sourceColumnId: string,  destinationColumnId: string}>) => {
        const { taskId, sourceColumnId, destinationColumnId } = action.payload;

        const sourceColumn = state.columns.find((col) => col.id === sourceColumnId);
        if (!sourceColumn) return;
      
        const taskIndex = sourceColumn.tasks.findIndex((t) => t.id === taskId);
        if (taskIndex === -1) return;
     
        const [task] = sourceColumn.tasks.splice(taskIndex, 1);
      

        const destinationColumn = state.columns.find(
          (col) => col.id === destinationColumnId
        );
        if (destinationColumn) {
          destinationColumn.tasks.push(task);
        }
    },
    deleteTask: (state, action: PayloadAction<{taskId: string, sourceColumnId: string,}>) =>{
      const {taskId, sourceColumnId} = action.payload;
      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId);
      if (!sourceColumn) return

      sourceColumn.tasks = sourceColumn.tasks.filter((task) => task.id !== taskId)

    },
    appendTask: (state, action: PayloadAction<{ sourceColumnId: string, content: string }>) => {
      const {sourceColumnId, content} = action.payload;
      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId);
      if (!sourceColumn) return

     sourceColumn.tasks.push({id: Date.now().toString(), content: content})
    },
  },
});

export const { moveTask, deleteTask, appendTask } = tasksSlice.actions;
export default tasksSlice.reducer;