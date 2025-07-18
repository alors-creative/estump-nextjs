import Hero from "@/app/_sections/home/Hero";
import styles from "./home.module.scss";
import WhyeStump from "@/app/_sections/home/WhyeStump";
import Services from "@/app/_sections/home/Services";
import HowItWorks from "@/app/_sections/home/HowItWorksSection";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <WhyeStump includeBtn={true} />
      <Services />
      <HowItWorks />
    </section>
  );
}
