import Sidebar from "@/app/_components/specialist/sidebar/Sidebar";
import styles from "./layout.module.scss";

function layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
}

export default layout;
