import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'

const TaskForm = () => {
  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setTask({ ...task, [name]: value })
  }

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addTask({
        ...task,
        id: uuid()
      })
    )
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='write your title'
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='write your description'
        cols='30'
        value={task.description}
        onChange={handleChange}
      />

      <button>save</button>
    </form>
  )
}
export default TaskForm
