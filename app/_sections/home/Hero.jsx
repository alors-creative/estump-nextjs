import Heading from "@/app/_components/heading/Heading";
import styles from "./hero.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.cta}>
        <Heading type="h1" color="orange">
          Get Your Yard Back in Shape with eStump
        </Heading>
        <p className={styles.text}>
          Quick, reliable, and affordable stump removal services in your area.
          Easily connect with trusted specialists to remove unsightly tree
          stumps and enjoy a clean, beautiful lawn.
        </p>
        <div className={styles.ctaButtons}>
          <LinkButton link="#" color="orange">
            Find a Stump Specialist
          </LinkButton>
          <LinkButton link="#" color="green">
            Become a Stump Specialist
          </LinkButton>
        </div>
      </div>
      <div className={styles.heroGallery}>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer1
          ].join(" ")}>
          <Image
            src="/photos/stump-1.jpg"
            alt="Photo of a tree stump"
            fill
            priority
            sizes="auto"
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer2
          ].join(" ")}>
          <Image
            src="/photos/stump-grinder-1.jpg"
            alt="Photo of a tree stump"
            fill
            priority
            sizes="auto"
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer3
          ].join(" ")}>
          <Image
            src="/photos/woodchips-1.jpg"
            alt="Photo of a tree stump"
            fill
            priority
            sizes="auto"
            style={{
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
