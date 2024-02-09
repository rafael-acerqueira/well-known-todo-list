import { ClipboardText } from 'phosphor-react'
import styles from './TodoList.module.css'

export function TodoList() {
  return(
    <main>
      <div className={styles.content}>
        <div className={styles.todoHeader}>
          <div className={styles.taskQuantityWrapper}>
            <span className={`${styles.createdTask} ${styles.taskTitle}`}>Tarefas criadas</span>
            <span className={styles.taskQuantity}>0</span>
          </div>
          <div className={styles.taskQuantityWrapper}>
            <span className={`${styles.finishedTask} ${styles.taskTitle}` }>Concluídas</span>
            <span className={styles.taskQuantity}>0</span>
          </div>
        </div>

        <div className={styles.todoContent}>
          <div className={styles.withoutTasks}>
            <ClipboardText size={56} color='#333333'/>
            <div className={styles.withTaskContent}>
              <span className={styles.withoutTaskText}>Você ainda não tem tarefas cadastradas</span>
              <span className={styles.withoutTaskText}>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}