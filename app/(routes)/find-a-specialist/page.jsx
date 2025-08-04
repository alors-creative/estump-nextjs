import Heading from "@/app/_components/heading/Heading";
import styles from "./findASpecialist.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";
import Image from "next/image";

function page() {
  return (
    <section className={styles.findASpecialist}>
      <div className={styles.heroGallery}>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer1
          ].join(" ")}>
          <Image
            src="/photos/stump-7-vapproved.JPG"
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
            src="/photos/stump-8-vapproved.JPG"
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
            src="/photos/stump-9-vapproved.JPG"
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
      <div className={styles.overview}>
        <Heading type="h1" color="purple">
          Ready to Find a Stump Specialist Near You?
        </Heading>
        <p>
          Looking to get rid of that stump? It’s simple! Fill out the form below
          with your stump’s measurements and a few basic details, and we’ll
          match you with a trusted, local stump specialist. Whether you're
          dealing with a small stump or a larger, more challenging removal, our
          specialists are here to make your yard look great. Once we have your
          information, we’ll connect you with the right professional who can get
          the job done quickly and efficiently.
        </p>
        <LinkButton
          link="/find-a-specialist/job-request/client-details"
          color="orange">
          Get Started
        </LinkButton>
      </div>
    </section>
  );
}

export default page;
