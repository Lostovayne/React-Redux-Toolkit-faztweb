import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskList />
  },
  {
    path: '/create-task',
    element: <TaskForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
