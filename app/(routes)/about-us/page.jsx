import WhyeStump from "@/app/_sections/home/WhyeStump";
import styles from "./aboutUs.module.scss";
import OurStory from "@/app/_sections/aboutUs/OurStory";
import OurValsAndMission from "@/app/_sections/aboutUs/OurValsAndMission";
import MediaGallery from "@/app/_sections/aboutUs/MediaGallery";

export const metadata = {
  title: "About eStump | Trusted Tree Stump Removal Services You Can Rely On",
  description:
    "Learn how eStump simplifies stump removal by pairing homeowners with experienced, local specialists. Discover our mission of transparency, efficiency, and customer satisfaction."
};

function page() {
  return (
    <section className={styles.aboutUs}>
      <OurStory />
      <WhyeStump includeBtn={false} />
      {/* <OurValsAndMission />
      <MediaGallery /> */}
    </section>
  );
}

export default page;
