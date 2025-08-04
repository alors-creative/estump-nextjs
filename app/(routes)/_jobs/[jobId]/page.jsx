import { getJob } from "@/app/_lib/data-service";
import styles from "./../layout.module.scss";

async function page({ params }) {
  const { jobId } = await params;
  // const job = await getJob(jobId);
  // const filteredJob = job.filter(j => Number(j.id) === Number(jobId))[0];

  return (
    <section className={styles.section}>
      <p>
        Job ID: <span>{filteredJob.id}</span>
      </p>
      <p>
        Status: <span>{filteredJob.status}</span>
      </p>
      <p>
        Price: <span>${filteredJob.price - filteredJob.price * 0.2}</span>
      </p>
    </section>
  );
}

export default page;
