import WhyeStump from "@/app/_sections/home/WhyeStump";
import styles from "./aboutUs.module.scss";

function page() {
  return (
    <section className={styles.aboutUs}>
      <section className={styles.ourStory}>Our Story</section>
      <WhyeStump />
      <section className={styles.ourValsAndMission}>
        Our Values and Mission
      </section>
      <section className={styles.mediaGallery}>Photo and Video Gallery</section>
    </section>
  );
}

export default page;
