import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice'

// I have store with slice

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})
