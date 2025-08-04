import LinkButton from "@/app/_components/buttons/LinkButton";
import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import styles from "./styles.module.scss";

function JoinTheFamily() {
  return (
    <section className={styles.section}>
      <div className="content">
        <Heading type="h2" color="green">
          Join the eStump Family Today
        </Heading>
        <p>
          Joining eStump is easy, and there are no fees or dues, just jobs! Once
          you’re approved and ready to go, you’ll be sent jobs directly based on
          your location and availability. We limit the number of contractors per
          city, so you’ll be working in your area with local homeowners who need
          your services.
          <br />
          Start receiving jobs today and become part of a trusted network of
          stump specialists!
        </p>
        <LinkButton link="/become-a-specialist/specialist-info" color="orange">
          Sign Up Now
        </LinkButton>
      </div>
      <div className={styles.imageContainer}>
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
    </section>
  );
}

export default JoinTheFamily;
