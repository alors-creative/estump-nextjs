import styles from "@/app/(routes)/become-a-specialist/formPages.module.scss";
import ComplainceDocsForm from "@/app/_components/forms/contractor/ComplainceDocsForm";
import Image from "next/image";

function page() {
  return (
    <section className={styles.section}>
      <ComplainceDocsForm />
    </section>
  );
}

export default page;
