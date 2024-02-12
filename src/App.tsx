import { v4 as uuidv4 } from 'uuid';

import './global.css'

import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { useState } from 'react'

export function App() {

  const [tasks, setTasks] = useState([])

  function createTask(taskText: string): void {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id: number): void {
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
  }

  function doneTask(id: number): void {
    const editedTasks = tasks.map(task => {
      if(task.id == id)
        return { ...task, done: !task.done }
      else
      return task
    })

    setTasks(editedTasks)
  }

  return (
    <>
      <Header createTask={createTask}/>
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask}
      />
    </>
  )
}
