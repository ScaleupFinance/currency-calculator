import { Converter } from "@/components/Converter";
import styles from "./page.module.css";
import { TasksWrapper } from "@/components/common/TasksWrapper";

const Home = () => {
  return (
    <main className={styles.main}>
      <Converter />
      {/* THIS IS ABSOLUTELY POSITIONED */}
      <TasksWrapper />
    </main>
  );
};

export default Home;
