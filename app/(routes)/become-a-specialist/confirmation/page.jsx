import styles from "@/app/(routes)/become-a-specialist/becomeASpecialistRequest.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";
import Heading from "@/app/_components/heading/Heading";

function page() {
  return (
    <section className={styles.confirmation}>
      <Heading type="h1" color="purple">
        Thank you so much for signing up to become a specialist, we will be
        reaching out to you shortly to set up a call.
      </Heading>
      <LinkButton link="/" color="orange">
        Home
      </LinkButton>
    </section>
  );
}

export default page;
