import WhyeStump from "@/app/_sections/home/WhyeStump";
import styles from "./aboutUs.module.scss";
import Ourstory from "@/app/_sections/aboutUs/Ourstory";
import OurValsAndMission from "@/app/_sections/aboutUs/OurValsAndMission";
import MediaGallery from "@/app/_sections/aboutUs/MediaGallery";

function page() {
  return (
    <section className={styles.aboutUs}>
      <Ourstory />
      <WhyeStump />
      <OurValsAndMission />
      <MediaGallery />
    </section>
  );
}

export default page;
