import { v4 as uuidv4 } from 'uuid';

import './global.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { ITask } from './components/Task'

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  function createTask(taskText: string): void {
    const newTask = {
      id: uuidv4(),
      text: taskText,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id: string): void {
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
  }

  function doneTask(id: string): void {
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
