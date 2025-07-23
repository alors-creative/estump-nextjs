import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import FormReview from "@/app/_components/forms/contractor/FormReview";

function page() {
  return (
    <section className={styles.section}>
      <FormReview />
    </section>
  );
}

export default page;
