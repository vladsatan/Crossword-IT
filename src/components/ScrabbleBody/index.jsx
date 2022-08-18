import styles from '../ScrabbleBody/index.module.css'

const ScrabbleBody = () => {
  return (
    <div className={styles.scrabble_body}>
        <input id="dog1" className={styles.dog} />
        <input id="dog2" className={styles.dog} />
        <input id="dog3" className={styles.dog} />
    </div>
  )
}

export default ScrabbleBody
