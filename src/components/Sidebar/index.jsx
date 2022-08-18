import styles from '../Sidebar/index.module.css'

import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem task="What is the biggest mountain" />
      <SidebarItem task="What is the biggest mountain" />
      <SidebarItem task="What is the biggest mountain" />
      <SidebarItem task="What is the biggest mountain" />

      <SidebarItem task="What is the biggest mountain" />

      <SidebarItem task="What is the biggest mountain" />

      <SidebarItem task="What is the biggest mountain" />



    </div>
  )
}

export default Sidebar
