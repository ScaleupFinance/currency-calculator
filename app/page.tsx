import { Footer } from "@/components/Footer";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Converter } from "@/components/Converter";
import { Tasks } from "@/components/Tasks";

export default function Home() {
  return (
    <main className={styles.main}>
      <Converter />
      <Tasks />
      {/* THIS IS ABSOLUTELY POSITIONED */}
    </main>
  );
}
