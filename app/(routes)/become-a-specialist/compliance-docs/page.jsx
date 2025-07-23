import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import ComplainceDocsForm from "@/app/_components/forms/contractor/ComplainceDocsForm";

function page() {
  return (
    <section className={styles.section}>
      <ComplainceDocsForm />
    </section>
  );
}

export default page;
