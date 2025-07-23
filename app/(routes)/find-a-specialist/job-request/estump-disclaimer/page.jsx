import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";
import EStumpDisclaimerForm from "@/app/_components/forms/client/EStumpDisclaimerForm";

function page() {
  return (
    <section className={styles.section}>
      <EStumpDisclaimerForm />
    </section>
  );
}

export default page;
