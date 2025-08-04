import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import PasswordForm from "@/app/_components/forms/contractor/PasswordForm";

function page() {
  return (
    <section className={styles.section}>
      <PasswordForm />
    </section>
  );
}

export default page;
