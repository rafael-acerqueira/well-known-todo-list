import styles from './Header.module.css'

import logo from '../assets/logo.svg'


import { CreateButton } from './CreateButton'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <form className={styles.createForm}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder='Adicione uma nova tarefa'
        />
        <CreateButton />
      </form>
    </header>
  )
}