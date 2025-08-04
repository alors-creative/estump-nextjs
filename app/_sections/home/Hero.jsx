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
          At eStump, we make it simple to get rid of stubborn, unsightly tree
          stumps that disrupt your beautiful yard. Whether you're dealing with a
          stump from a recent storm or an old one that’s been lingering for
          years, our seamless process connects you with trusted, local
          specialists who are ready to get the job done quickly and efficiently.
          Say goodbye to the hassle of handling stump removal on your own and
          enjoy a clean, open space that's perfect for your next project or just
          a smoother lawn.
        </p>
        <div className={styles.ctaButtons}>
          {/* <LinkButton link="#" color="orange">
            Find a Stump Specialist
          </LinkButton> */}
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
            src="/photos/stump-and-machine-2.jpg"
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
