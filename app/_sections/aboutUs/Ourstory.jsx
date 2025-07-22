import Heading from "@/app/_components/heading/Heading";
import styles from "./ourStory.module.scss";

function OurStory() {
  return (
    <section className={styles.ourStory}>
      <Heading type="h1" color="orange">
        A Better Way to Handle Stump Removal
      </Heading>
      <p className={styles.text}>
        eStump was founded by a team with over 20 years of experience in the
        stump removal industry, who recognized the frustration homeowners faced
        when trying to remove stubborn tree stumps. After years of working in
        the field, our founder wanted to create a more efficient, transparent,
        and accessible way for homeowners to book professional stump removal
        services.
        <br></br>
        Our mission is simple: Make stump removal easy and affordable for
        everyone, whether you’re dealing with a tree stump after a storm or just
        looking to clear space in your yard. With a strong commitment to quality
        and local expertise, we’ve designed a seamless process that takes the
        guesswork out of stump removal. We're proud to connect you with trusted,
        vetted specialists in your area, bringing the expertise of over two
        decades to every project.
      </p>
    </section>
  );
}

export default OurStory;
