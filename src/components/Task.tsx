import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return(
    <div className={styles.wrapper}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}>
          <Check size={15} />
        </span>
      </label>
      <span className={styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button className={styles.deleteButton} title="Delete Task"><Trash size={24} /></button>
    </div>
  )
}