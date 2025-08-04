import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import styles from "./styles.module.scss";

function TypesOfStumps() {
  return (
    <section className={styles.section}>
      <div className="content">
        <Heading type="h2" color="purple">
          Stump Types and Pricing
        </Heading>
        <p>
          As a stump specialist, you'll be working with different types of
          stumps, each with its own pricing structure. You’ll be paid $3 per
          inch of stump width, with a minimum job cost of $300 for up to 100
          inches. If the stump height exceeds 12 inches, there may be additional
          charges for cutting off the trunk. Here’s a breakdown:
        </p>
        <ol>
          <li>
            Standard Stump:
            <span>
              For regular stumps, measure from one end of the stump to the
              other.
            </span>
          </li>
          <li>
            Rooted Stump:
            <span>
              Measure from the end of one root to the end of the other.
            </span>
          </li>
          <li>
            Storm-Damaged Stump:
            <span>
              For storm-damaged stumps, measure from root ball to root ball.
              Even if the stump is uprooted, measure from one side to the other.
            </span>
          </li>
        </ol>
      </div>
      <div className={styles.imageContainer}>
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
    </section>
  );
}

export default TypesOfStumps;
