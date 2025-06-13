import LogoBox from "@/app/_ui/LogoBox";
import styles from "./nav.module.scss";
import NavLinks from "@/app/_components/nav/NavLinks";
import LoginButtons from "@/app/_components/nav/LoginButtons";

function Nav() {
  return (
    <nav className={styles.nav}>
      <LogoBox />
      <NavLinks />
      <LoginButtons />
    </nav>
  );
}

export default Nav;
