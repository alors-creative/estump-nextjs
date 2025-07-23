import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";
import PaymentForm from "@/app/_components/forms/client/PaymentForm";

function page() {
  return (
    <section className={styles.section}>
      <PaymentForm />
    </section>
  );
}

export default page;
