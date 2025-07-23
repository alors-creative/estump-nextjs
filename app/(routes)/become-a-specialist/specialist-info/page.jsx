import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import InfoForm from "@/app/_components/forms/contractor/InfoForm";

function page() {
  return (
    <section className={styles.section}>
      <InfoForm />
    </section>
  );
}

export default page;
