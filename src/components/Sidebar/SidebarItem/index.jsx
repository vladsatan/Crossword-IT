import styles from '../SidebarItem/index.module.css'

const SidebarItem = (props) => {
  return <div className={styles.sidebaritem}>{props.task}</div>
}

export default SidebarItem;
