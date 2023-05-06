import styles from './BotaoEnviar.module.css'

function BotaoEnviar({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default BotaoEnviar