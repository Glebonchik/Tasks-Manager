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
      const task = sourceColumn?.tasks.find((t) => t.id === taskId);

      if (!sourceColumn || !task) return
      sourceColumn.tasks = sourceColumn.tasks.filter((t) => t.id !== taskId);

      const destinationColumn = state.columns.find((col) => col.id == destinationColumnId);
      if (destinationColumn){
        destinationColumn.tasks.push(task);
      }
    },
  },
});

export const { moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;