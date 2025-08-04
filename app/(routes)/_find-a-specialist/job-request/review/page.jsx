import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";
import FormReview from "@/app/_components/forms/client/FormReview";

function page() {
  return (
    <section className={styles.section}>
      <FormReview />
    </section>
  );
}

export default page;
