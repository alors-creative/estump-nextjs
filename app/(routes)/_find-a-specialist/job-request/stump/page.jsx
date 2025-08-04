import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";
import StumpForm from "@/app/_components/forms/client/StumpForm";
import StumpPhotosForm from "@/app/_components/forms/client/StumpPhotosForm";

function page() {
  return (
    <section className={styles.section}>
      <StumpForm />
    </section>
  );
}

export default page;
