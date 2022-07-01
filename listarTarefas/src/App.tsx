import styles from './App.module.css'
import { Area } from './components/Area'
import { Header } from './components/Header'

export function App() {
  return (
    <div className={styles.container}>
      <Area></Area>
    </div>
  )
}