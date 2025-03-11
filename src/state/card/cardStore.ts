import { createSlice } from '@reduxjs/toolkit';
import ColumsState from '../../interfaces/columns';

const initialState:ColumsState = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action) => {
      const { taskId, sourceColumnId, destinationColumnId } = action.payload;

      const sourceColumn = state.columns[sourceColumnId];
      sourceColumn.taskIds = sourceColumn.taskIds.filter(id => id !== taskId);

      const destinationColumn = state.columns[destinationColumnId];
      destinationColumn.taskIds.push(taskId);
    },
  },
});

export const { moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;