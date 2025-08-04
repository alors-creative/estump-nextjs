import LinkButton from "@/app/_components/buttons/LinkButton";
import styles from "./page.module.scss";
import Heading from "@/app/_components/heading/Heading";

function page() {
  return (
    <section className={styles.section}>
      <Heading type="h1" color="purple">
        Thank you for contacting eStump, we will get back to you shortly.
      </Heading>
      <LinkButton link="/" color="orange">
        Home
      </LinkButton>
    </section>
  );
}

export default page;
