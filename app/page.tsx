import { Converter } from "@/components/Converter";
import { Tasks } from "@/components/Tasks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Converter />
      {/* THIS IS ABSOLUTELY POSITIONED */}
      <Tasks />
    </main>
  );
}
