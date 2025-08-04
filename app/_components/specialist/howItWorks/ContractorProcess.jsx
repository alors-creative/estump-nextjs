import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import styles from "./styles.module.scss";

function ContractorProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/photos/stump-7-vapproved.JPG"
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
        <Heading type="h2" color="green">
          How the Process Works for You
        </Heading>
        <ol>
          <li>
            2 Business Days to Respond Once You Pick Up a Job:{" "}
            <span>
              Once a homeowner submits their request and measurements, you have
              2 business days to respond. After confirming the job, you can
              schedule a convenient time for the stump removal.
            </span>
          </li>
          <li>
            5 Working Days to Schedule and Complete:{" "}
            <span>
              You have 5 working days to schedule and complete the job once you
              accept the request. This provides enough flexibility to manage
              your workload, especially if you’re dealing with storm-damaged
              stumps.
            </span>
          </li>

          <li>
            Payment and Finalizing the Job:{" "}
            <span>
              On the day of the job, perform the stump removal and collect the
              remaining payment directly from the homeowner. Be sure to mark the
              job as complete when finished.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ContractorProcess;
