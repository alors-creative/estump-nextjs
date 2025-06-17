import Image from "next/image";
import styles from "./services.module.scss";
import Heading from "@/app/_components/heading/Heading";
import LinkButton from "@/app/_components/buttons/LinkButton";

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <Image src="/photos/stump-and-machine-1.JPG" alt="" fill sizes="auto" />
      </div>
      <div className={styles.content}>
        <Heading type="h2" color="orange">
          Our Services
        </Heading>
        <div className={styles.servicesContainer}>
          <ul className={styles.serviceList}>
            <li className={styles.serviceItem}>
              <span>Standard Stump Removal: </span>Get rid of that stubborn
              stump quickly and effectively with professional equipment and
              experienced specialists.
            </li>
            <li className={styles.serviceItem}>
              <span>Large Tree Stump Removal: </span>Our specialists are
              equipped to handle even the biggest, toughest tree stumps,
              ensuring your lawn is smooth and clear.
            </li>
            <li className={styles.serviceItem}>
              <span>Storm Damage Stump Removal: </span>After a storm, we're here
              to help you clean up the mess—no stump is too difficult to remove
              after a bad weather event.
            </li>
          </ul>
        </div>
        <LinkButton link="#" color="green">
          Get Connected With a Stump Specialist
        </LinkButton>
      </div>
    </section>
  );
}

export default Services;
