import Hero from "@/app/_sections/home/Hero";
import styles from "./home.module.scss";
import WhyeStump from "@/app/_sections/home/WhyeStump";
import Services from "@/app/_sections/home/Services";
import HowItWorks from "@/app/_sections/home/HowItWorksSection";

export const metadata = {
  title:
    "eStump | Quick & Easy Tree Stump Removal by Trusted Local Specialists",
  description:
    "Get rid of stubborn tree stumps fast with eStump. We connect you to vetted, local stump removal experts for transparent pricing and hassle‑free cleanup. Submit your measurements, get a specialist in 48 hours, and enjoy a clean, beautiful yard."
};

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
