import LinkButton from "@/app/_components/buttons/LinkButton";
import styles from "./loginButton.module.scss";

function LoginButtons() {
  return (
    <div className={styles.loginButtons}>
      <LinkButton link="#" color="green">
        Stump Specialists
      </LinkButton>
      <LinkButton link="/find-a-specialist" color="orange">
        Get a Quote
      </LinkButton>
    </div>
  );
}

export default LoginButtons;
