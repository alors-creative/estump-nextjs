import ClientDetails from "@/app/_components/forms/client/ClientDetailsForm";
import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";

function page() {
  return (
    <section className={styles.section}>
      <h1>Enter the information below</h1>

      <ClientDetails />
    </section>
  );
}

export default page;
