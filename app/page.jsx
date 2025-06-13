import Hero from "@/app/_sections/home/Hero";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
    </section>
  );
}
