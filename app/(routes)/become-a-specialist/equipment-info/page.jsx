import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import EquipmentInfo from "@/app/_components/forms/contractor/EquipmentInfo";

function page() {
  return (
    <section className={styles.section}>
      <EquipmentInfo />
    </section>
  );
}

export default page;
