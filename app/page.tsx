import { Footer } from "@/components/Footer";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Converter } from "@/components/Converter";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Converter />
      <Footer baseCurrency="DKK" rate={0.12} targetCurrency="GBP" />
    </main>
  );
}
