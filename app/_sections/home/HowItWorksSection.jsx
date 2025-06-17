import Heading from "@/app/_components/heading/Heading";
import styles from "./howItWorksSection.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";

function HowItWorksSection() {
  return (
    <section className={styles.howitworks}>
      <Heading type="h2" color="purple">
        How eStump Works
      </Heading>
      <p className={styles.text}>
        Getting rid of a tree stump has never been easier with eStump. Start by
        filling out a simple quote form with your stump’s measurements and a 20%
        deposit. We’ll match you with a trusted stump specialist in your area
        who will review your request. Once a specialist picks up your job,
        they’ll schedule a time to come out and remove the stump. On the day of
        removal, the specialist will complete the job and collect the remaining
        payment. With your stump gone, you’ll have a clean, beautiful yard to
        enjoy.
      </p>
      <LinkButton link="/how-estump-works" color="orange">
        Learn More
      </LinkButton>
    </section>
  );
}

export default HowItWorksSection;
