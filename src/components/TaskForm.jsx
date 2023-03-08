import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid()
        })
      )
    }

    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [])

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
