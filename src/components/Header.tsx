import styles from './Header.module.css'

import logo from '../assets/logo.svg'


import { CreateButton } from './CreateButton'
import { useState, FormEvent } from 'react'


interface Header {
  createTask: (taskText: string) => void
}

export function Header({ createTask }: Header) {

  const [task, setTask] = useState('')

  function onCreateTask(e:FormEvent): void {
    e.preventDefault()
    createTask(task)
    setTask('')
  }

  return(
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <form className={styles.createForm} onSubmit={onCreateTask}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <CreateButton />
      </form>
    </header>
  )
}