import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export interface TaskProps {
  id: number,
  text: string,
  done: boolean,
  deleteTask: (id: number) => void,
  doneTask: (id: number) => void,
}

export function Task({ id, text, done, deleteTask, doneTask }:TaskProps) {

  const doneClass = done ? styles.done : ''

  return(
    <div className={styles.wrapper}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" onClick={() => doneTask(id)}/>
        <span className={styles.checkmark}>
          <Check size={15} />
        </span>
      </label>
      <span className={`${styles.taskText} ${doneClass}`}>{text}</span>
      <button
        className={styles.deleteButton}
        title="Delete Task"
        onClick={() => deleteTask(id)}>
          <Trash size={24} />
      </button>
    </div>
  )
}