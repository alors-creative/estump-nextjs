import LinkButton from "@/app/_components/buttons/LinkButton";
import styles from "./loginButton.module.scss";

function LoginButtons({ type = "nav" }) {
  return (
    <div className={styles.loginButtons}>
      <LinkButton
        link={type !== "footer" ? "/become-a-specialist" : "/specialist/login"}
        color="green">
        {type !== "footer" ? "Stump Specialists" : "Specialists Login"}
      </LinkButton>
      {/* <LinkButton link="/find-a-specialist" color="orange">
        Get a Quote
      </LinkButton> */}
    </div>
  );
}

export default LoginButtons;
