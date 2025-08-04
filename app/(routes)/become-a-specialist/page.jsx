import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";
import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";

function page() {
  return (
    <section className={styles.section}>
      <div>
        <Heading type="h1" color="orange">
          How eStump Works for Stump Specialists
        </Heading>
        <p>
          At eStump, we make it easy for you to connect with homeowners who need
          professional stump removal and to increase your productivity in your
          business. Here’s how the process works and how you can get started as
          a trusted stump specialist in our network.
        </p>
        <div className={styles.buttons}>
          <LinkButton link="/become-a-specialist/how-it-works" color="orange">
            How It Works
          </LinkButton>
          <LinkButton link="/become-a-specialist/specialist-info" color="green">
            Sign Up Now
          </LinkButton>
        </div>
      </div>
      <div className={styles.heroGallery}>
        <div className={[styles.filler, styles.filler1].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler2].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler3].join(" ")}>&nbsp;</div>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer1
          ].join(" ")}>
          <Image
            src="/photos/stump-and-machine-2.JPG"
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
            src="/photos/stump-and-machine-3.JPG"
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
            src="/photos/stump-and-machine-4.JPG"
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

export default page;
