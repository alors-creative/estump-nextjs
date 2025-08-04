import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import styles from "./styles.module.scss";

function ContractorFlexibility() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
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
      <div className="content">
        <Heading type="h1" color="orange">
          Contractor Flexibility: Manage Your Workload
        </Heading>
        <p>
          eStump provides flexibility, especially during busy times like after a
          storm. Here’s how you can manage your job schedule:
        </p>
        <Heading type="h6" color="purple">
          Storm Traveler Specialist vs. Standard Specialist:
        </Heading>
        <p>
          If you’re comfortable traveling further to handle storm-related
          damage, you can choose to sign up as a Storm Traveler. This typically
          means you’re willing to travel across state lines and take on jobs in
          areas impacted by storms. You can select how far you’re willing to
          travel for regular jobs—whether that’s 25, 50, or 75 miles—but with
          Storm Traveler Specialist status, you’re open to taking jobs that may
          require you to travel much further, depending on the severity of the
          storm and demand.
        </p>
        <Heading type="h6" color="purple">
          Flexible Scheduling:
        </Heading>
        <p>
          If your area is experiencing a high volume of storm damage, you have
          the option to adjust your availability. This allows you to manage your
          workload effectively and ensures you’re not overwhelmed while still
          supporting and communicating to the homeowners in need of your
          services.
        </p>
      </div>
    </section>
  );
}

export default ContractorFlexibility;
