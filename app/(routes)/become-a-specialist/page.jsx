import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";

function page() {
  return (
    <section className={styles.section}>
      Become a Specialist
      <LinkButton link="/become-a-specialist/specialist-info" color="orange">
        Get Started
      </LinkButton>
    </section>
  );
}

export default page;
