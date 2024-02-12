import { ClipboardText } from 'phosphor-react'
import styles from './TodoList.module.css'
import { Task, TaskProps } from './Task'


interface TodoList {
  tasks: Array<TaskProps>,
  deleteTask: (id: number) => void,
  doneTask: (id: number) => void
}

export function TodoList({ tasks, deleteTask, doneTask }: TodoList) {

  const finishedTasks = tasks.filter(task => task.done)

  return(
    <main>
      <div className={styles.content}>
        <div className={styles.todoHeader}>
          <div className={styles.taskQuantityWrapper}>
            <span className={`${styles.createdTask} ${styles.taskTitle}`}>Tarefas criadas</span>
            <span className={styles.taskQuantity}>{tasks.length}</span>
          </div>
          <div className={styles.taskQuantityWrapper}>
            <span className={`${styles.finishedTask} ${styles.taskTitle}` }>Concluídas</span>
            <span className={styles.taskQuantity}>{tasks.length && `${finishedTasks.length} de ${tasks.length}`}</span>
          </div>
        </div>

        <div className={styles.todoContent}>
          {
            tasks &&
            <div className={styles.todoListWrapper}>
              {
                tasks.map(task => (
                  <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    done={task.done}
                    deleteTask={deleteTask}
                    doneTask={doneTask}
                  />
                ))
              }

            </div>

          }

          {
            tasks.length == 0 &&
            <div className={styles.withoutTasks}>
              <ClipboardText size={56} color='#333333'/>
              <div className={styles.withTaskContent}>
                <span className={styles.withoutTaskText}>Você ainda não tem tarefas cadastradas</span>
                <span className={styles.withoutTaskText}>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  )
}